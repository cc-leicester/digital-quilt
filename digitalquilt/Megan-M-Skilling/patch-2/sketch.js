var angle = 0; // this means my angle is always 0//

function setup() {
  createCanvas(500, 500); // this makes my background 500px by 500px//
  background(255, 0, 10); // this makes my background colour the first number is the amount of red the second number is the amount of green and the third number is the amount of blue//
}

function draw() {
  var x = map(cos(angle), -1, 1, 0, width); // map remaps the number for me and con makes the angle complementary//
  var y = map(sin(angle), -1, 1, 0, height); // map remaps the number for me  sin makes the the angle into a right angle//
  line(20, 500, x, y);  // this creates the line the number 20 is the x of the first point and the 500 is the y of first point//
  stroke('white');

  ellipse(x, y, 2, 0); // this creates a circle the number 2 is the width and the number 0 is the height//

  angle += 0.025; // i changed my angle to 0.025//
}
