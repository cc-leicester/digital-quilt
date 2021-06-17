//I used the website below as a guide to help me create my piece
 //https://editor.p5js.org/myhow/sketches/Skm4vC0d7

var maxDiameter;
var theta;

function setup() {
  createCanvas(500,500);

  maxDiameter = width/10;
    theta = 0;

}

function draw() {
  background(0);
  stroke(255)
  strokeWeight(3);

  let rows = width/55;
  let col = height/55;
  let circD = width/100;
  let distanceX = width/10;
  let distanceY = height/10;

  for (var r = 1; r<= rows; r++) {
    for (var c = 1; c <= col; c++){

  var diam = width/5 + sin(theta) * maxDiameter ;
  fill(0,255,255,255-25 * r);
  ellipse(c * distanceX, r * distanceY, diam, diam);

    // gives the circles the pulsing movement
    theta += .0007;
    }
  }
}
