/*
Exercise instructions:
1. Position the circle on the top-left area of the canvas
2. Position the square at the bottom right
3. Draw a line between the circle centre and the square top-left corner?
*/


function setup() {​​​​​​
  createCanvas(500, 500);
}​​​​​​

function draw() {​​​​​​
  background(230);
  ellipse(width/2, height/2, 100, 100);
  rect(width/2, height/2, 100, 100);
  line(0, 0, width, height);
}
