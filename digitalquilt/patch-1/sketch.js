// please, add the description of this artwork here.
// please, add the instruction on how to interact here.
// please, add any other important information for the comprehension of the code

function setup(){ // sets up the artwork
  createCanvas(720, 720); // creates a square canvas of resolution 720 pixels
}

function draw(){ // draws the artwork
  background(0); // sets the baground colour to black
  fill(255); // sets the inner circle color to white
  ellipse(width*.5, height*.5, width*.25, width*.25); // creates an ellipse positioned in the middle of the canvas and of size a quarter of the canvas.
}