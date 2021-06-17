// This artwork changes the pattern of the tiles based on the binary representation of the mouse position.
// At first I tried to do it accurate to the pixel but I realised that it was better having multiple pixels for one change so it doesn't do as much flashing.
// Moving the mouse around changes the pattern and moving the mouse left and right changes the hue.

//Initialise Constants
const patchSize = 500;
const numOfRects = 6;
const rectSize = patchSize/numOfRects;
const totalMouseSize = 2**numOfRects
const mouseMultiplyer = patchSize/(totalMouseSize);
//Colour Constants
const numOfColours = 1536;
const colourMouseMultiplyer = patchSize/numOfColours;

//Global Vars
shade = 127;

function setup(){
  createCanvas(patchSize, patchSize);
  noCursor();
  prevMouseX = mouseX;
  prevMouseY = mouseY;
  targetX = mouseX;
}

function pad(value, padding, padder="0") {
  //Add a padding to the start to make string a set length
  value = value.toString();
  while (value.length < padding) {
    value = padder+value; //Add the pad value to the start until it is correct length
  }
  return value;
}

function getMouse(pos) {
  if (pos > patchSize-mouseMultiplyer) { //Mouse is off to the right
    val = pad("1",numOfRects);
  }
  else if (pos < 0) { //Mouse is off to the left
    val = pad("",numOfRects,"1");
  }
  else { //Mouse is on canvas
    val = pad(parseInt(totalMouseSize-1-Math.floor(pos/mouseMultiplyer)).toString(2),numOfRects); //Convert mouse position to 6 bit binary
  }
  return val;
}

function drawPosition() {
  //Calculate colour
  hue = calculateHue();

  //Get mouse position in buinary
  xBin = getMouse(mouseX);
  yBin = getMouse(mouseY);

  
  for (y = 0; y < numOfRects; y++) { //Iterate through rows
    for (x = 0; x < numOfRects; x++) {  //Iterate through columns
      if (xBin[x] == 1 & yBin[y] == 1) { //1 in binary
        fill(hueToRGB(hue)); 
      }
      else {//0 in binary
        fill(hueToRGB(hue+numOfColours/2)); //Make colour opposite hue to 1
      }
      //Draw Rectangle
      rect(x*rectSize,y*rectSize,rectSize,rectSize);
    }
  }
}

function hueToRGB(hue) {
  //Make hue in correct bounds
  while (hue >= numOfColours) {
    hue -= numOfColours;
  }
  while (hue < 0) {
    hue += 1024+512;
  }

  //Convert hue values 0 to 1535 to RGB values
  if (hue < 256) {
    col = [255,hue,0];      //Red to Yellow
  }
  else if (hue < 512) {
    col = [512-hue,255,0];  //Yellow to Green
  }

  else if (hue < 512+256) {
    col = [0,255,hue-512]   //Green to Cyan
  }
  else if (hue < 1024) {
    col = [0,1024-hue,255]  //Cyan to Blue
  }

  else if (hue < 1024+256) {
    col = [hue-1024,0,255]  //Blue to Magenta
  }
  else if (hue < 1024+512) {
    col = [255,0,1536-hue]  //Magenta to Red
  }

  return col
}

function calculateHue() {
  //Calculate mouse hue
  scaledMouseX = mouseX/colourMouseMultiplyer;
  //Limiters for mouse hue
  if (scaledMouseX < 0) {
    scaledMouseX = 0;
  }
  else if (scaledMouseX > numOfColours) {
    scaledMouseX = numOfColours;
  }

  //Calculate amount for colour to change
  //THe colour changes slower than mouse movement and catches up to make it feel more smooth.
  mouseDifferenceX = scaledMouseX-shade
  shade += mouseDifferenceX/15

  return shade;
}

function draw(){ // draws the artwork
  background(255); // sets the baground colour to grey
  fill(0);
  stroke(0);
  drawPosition();
}