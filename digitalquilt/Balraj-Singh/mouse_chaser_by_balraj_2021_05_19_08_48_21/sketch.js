let spaceX = 20, spaceY = 20, diam = 10;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(220);
  
  //horizontal row
  for (let x = 20; x < width; x += spaceX){
    //vertical column
    for (let y = 20; y <height; y += spaceY){
      //figure out distance from the mouse
      let d = dist(mouseX, mouseY, x, y);
      if(d < 100){
        fill(255, 0, 0, 100);
        //adjust diam based on distance
        diam = map(d, 0, 100, 50, 1);
      } else {
        fill(255);
        diam = 10;
      }
      ellipse(x, y, diam);
    }
  }
}