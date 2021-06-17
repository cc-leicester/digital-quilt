// This artwork shows a maze that has been randomly generated that is scalable to any dimensions (obviously there is a limit on how big it can be due to pixel limitations)
// I decided for this specific range because it shows constantly changing maze effect but when you make the maze big and dense enough the P5 scaling makes an effect of
// circles appearing that I really like

// Move the mouse left and right to change the size of the maze and colour of the background of the maze



//Settings
const showFramerate = false;
const showPointer = false;
const showGeneration = false;
const keyboardStep = false;
const colourBasedOnFramerate = false; //I experimented with the colour being based on the framerate but the mouse postion seemed better. Try setting this to true to try framerate out
const patchSize = 500;

//Init Global Vars
size = 10;
totalGridSize = 0;
pixelSize = 0;

mazeArray = null;
visited = null;
visitedCells = null;
numOfCells = 0;
xPos = 0;
yPos = 0;

function calculateSize() {
  //Calculate size variables for the maze
  totalGridSize = (size*2)+1;
  pixelSize = patchSize/totalGridSize;
}

function randint(min, max) {
  //https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  //Used code from 2nd answer on this page
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawWaffle() {
  //Create a "waffle" in the mazeArray as the starting point for the maze
  //VERTICAL
  for (x = 0; x < size+1; x++) {
    for (y = 0; y < totalGridSize; y++) {
      mazeArray[y][x*2] = true;
    }
  }
  //HORIZONTAL
  for (y = 0; y < size+1; y++) {
    for (x = 0; x < totalGridSize; x++) {
      mazeArray[y*2][x] = true;
    }
  }
  //for (y = 0; y < size+1; y++) {
  //  rect(0, y*pixelSize*2, patchSize, pixelSize);
  //}
}

function generateMaze() {
  calculateSize();
  //Initialise empty 2D array mazeArray containing only false
  mazeArray = Array(totalGridSize);
  for (i = 0; i < totalGridSize; i++) {
    mazeArray[i] = Array(totalGridSize).fill(false);
  }
  //Initialise empty 2D array visited containing only false
  visited = Array(size);
  for (i = 0; i < size; i++) {
    visited[i] = Array(size).fill(false);
  }
  //Initialse arrays for storing and counting previous cells
  visitedCells = [];
  numOfCells = 0;

  //Pick starting position
  xPos = randint(0,size-1);
  yPos = randint(0,size-1);
  //console.log(xPos);
  //console.log(yPos);

  //Add starting cell as a visited cell
  visited[yPos][xPos] = true;
  visitedCells.push([xPos,yPos])
  numOfCells += 1;

  drawWaffle();

  //Generation Algorithm
  if (!showGeneration) {
    while (numOfCells >= 1) {
      mazeIteration();
    }
  }

}

function mazeIteration() {
  //Next iteration of maze algorithm
  //Make a list of possible directions to go
  possibleDirections = []
  if (xPos > 0) {
    if (!(visited[yPos][xPos-1])) {
      //LEFT
      possibleDirections.push([-1,0]);
    }
  }
  if (xPos < size-1) {
    if (!(visited[yPos][xPos+1])) {
      //RIGHT
      possibleDirections.push([1,0]);
    }
  }
  if (yPos > 0) {
    if (!(visited[yPos-1][xPos])) {
      //UP
      possibleDirections.push([0,-1]);
    }
  }
  if (yPos < size-1) {
    if (!(visited[yPos+1][xPos])) {
      //DOWN
      possibleDirections.push([0,1]);
    }
  }
  if (possibleDirections.length == 0) {
    //No-where to go
    //Move to previous cell
    delete visitedCells[numOfCells-1];//Delete current cell
    numOfCells -= 1
    prevPos = visitedCells[numOfCells-1];
    if (numOfCells > 0) {//Movw to previus cell if there is one
      xPos = prevPos[0];
      yPos = prevPos[1];
    }
    
  }
  else {
    //Pick a  random directon
    directionId = randint(0,possibleDirections.length-1);
    direction = possibleDirections[directionId];

    //Get actual position of maze in array
    realX = 2*xPos+1;
    realY = 2*yPos+1;

    //Move in direciton to knock out wall from waffle
    realX += direction[0];
    realY += direction[1];

    xPos += direction[0];
    yPos += direction[1];

    //Update arrays to show that cell was visited
    mazeArray[realY][realX] = false;
    visited[yPos][xPos] = true;
    visitedCells[numOfCells] = [xPos,yPos];
    numOfCells += 1;
  }
}

function drawPointer() {
  //Draw green pointer to show where current iteration is
  realX = 2*xPos+1;
  realY = 2*yPos+1;
  stroke(0,0,255);
  fill(0,0,255);
  rect(realX*pixelSize,realY*pixelSize,pixelSize,pixelSize);
}

function drawMaze() {
  //Draw maze from array
  for (x = 0; x < totalGridSize; x++) {
    for (y = 0; y < totalGridSize; y++) {
      if (mazeArray[y][x]) {
        rect(x*pixelSize,y*pixelSize,pixelSize,pixelSize);
      }
    }
  }
}

function generateColour(fraction) {
  //Generate colour that maze should be
  if (colourBasedOnFramerate) {
    fraction = 1/frameRate();
  }
  if (fraction < 0.5) {
    background(fraction*511, 255,0);
  }
  else {
    background(255, 511-fraction*511,0);
  }
  
}

function setup(){
  //When script is first loaded
  createCanvas(patchSize, patchSize);
  generateMaze();
  //frameRate(20);
}

function draw(){ // draws the artwork
  generateColour(mouseX/patchSize);
  //Make rectangle
  fill(0,0,0);
  stroke(0,0,0);
  //IF ENABLED SHOW GENERATION STEPS (for debugging)
  if (showGeneration & !keyboardStep) {
    if (numOfCells >= 1) {
      mazeIteration();
    }
  }

  //Interaction only works in box
  if (mouseX < 4) {
    mouseX2 = 4;
  }
  else if (mouseX > patchSize) {
    mouseX2 = patchSize;
  }
  else {
    mouseX2 = mouseX;
  }

  //Set the size of maze from mouse X
  mazeSize = Math.floor(mouseX2/3.5)
  //If different maze size to last generate new maze
  if (mazeSize != size & mouseY > 0 & mouseY < patchSize) {
    size = mazeSize;
    generateMaze();
  }
  drawMaze();

  //Draw Framerate at top left
  if (showFramerate) {
    stroke(255);
    fill(255);
    textSize(50);
    textAlign(LEFT,TOP);
    text(""+Math.round(frameRate()), 10, 20);
  }

  if (showPointer) {
    drawPointer();
  }
}

function keyPressed(){
  //Debug iteration step
  if (keyCode == 39) {
    if (keyboardStep) {
      if (numOfCells >= 1) {
        mazeIteration();
      }
    }
  }
}

function mousePressed(){
  //If clicked in box generate new maze
  if (mouseX > 0 & mouseX < patchSize & mouseY > 0 & mouseY < patchSize) {
    generateMaze();
  }
}