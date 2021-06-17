// A simple srite, where the colours change aswell as the direction of the flow
// of the direction
// Warning: may contain flashing colours, may be harmful to sensitive eyes.
//also may cause dizziness.
//References:
//Youtube.com. 2021. Before you continue to YouTube. [online] Available at: <https://www.youtube.com/watch?v=uk96O7N1Yo0>
//Youtube.com. 2021. Before you continue to YouTube. [online] Available at: <https://www.youtube.com/watch?v=ktPnruyC6cc>

function setup(){ //creates the canvas to allow more stuff tp be drawn unto it
createCanvas(500,500); //the size of the canvas.

angleMode(DEGREES);
rectMode(CENTER); //moving te rectangle into the center

}

function draw(){ //drawing the canvas
  background(0); //colour of the background
  noFill(); //the rectangle has no colour

  translate(width/ 2, height/ 2); //translating this to the center of the canvas


for(var i = 0; i < 100; i ++) {
    push();
    //we will be using push and pop to rotate the shape
    rotate(sin(frameCount + i)* 170); //framecount + i will be used to rotate each shape at a dofferent rate
  //the sin fucntion wil be used to rotate the shape back and forth

//where we will be adding colour, using the sin function
var r = map(sin(frameCount), - 1, 1, 50, 200);
var g = map(cos(frameCount) / 2, -1, 1, 50, 180);
var b = map(sin(frameCount) / 4, -1, 1, 50, 25);

stroke(r, g, b);


  rect(0, 0, 10 - i * 7, 103 - i * 7, 180 - i); //creating a rectangle with rounded edges
//for each loop, the width and height have to be decreased

rotate(sin(frameCount + i)* 120); //framecount + i will be used to rotate each shape at a dofferent rate
//the sin fucntion wil be used to rotate the shape back and forth

//where we will be adding colour, using the sin function
var r = map(sin(frameCount), - 1, 1, 50, 235);
var g = map(cos(frameCount) / 2, -1, 1, 50, 255);
var b = map(sin(frameCount) / 4, -1, 1, 50, 156);

stroke(r, g, b); //changing the colour of the lines of the sprites


rect(0, 0, 560 - i * 3, 560 - i * 3, 150 - i); //creating a rectangle with rounded edges
//for each loop, the width and height have to be decreased
pop();

}

}
