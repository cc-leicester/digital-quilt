//references 
// P_2_2_4_02
// http://www.generative-gestaltung.de


'use strict';

var currentCount = 1;
var x = [];
var y = [];
var r = [];
var x2 = [];
var y2 = [];


function setup() {
  createCanvas(800, 800);

  // first circle
  x[0] = 50;
  y[0] = 50;
  r[0] = 50;
}

function draw() {
  clear();

  strokeWeight(0.5);
  noFill();

  // create a random set of parameters
  var newR = random(1, 7);
  var newX = random(newR, width - newR);
  var newY = random(newR, height - newR);

  var closestDist = Number.MAX_VALUE;
  var closestIndex = 0;
  // which circle is the closest?
  for (var i = 0; i < currentCount; i++) {
    var newDist = dist(newX, newY, x[i], y[i]);
    if (newDist < closestDist) {
      closestDist = newDist;
      closestIndex = i;
    }
  }

  // align it to the closest circle outline
  var angle = atan2(newY - y[closestIndex], newX - x[closestIndex]);

  x2[currentCount] = newX;
  y2[currentCount] = newY;
  x[currentCount] = x[closestIndex] + cos(angle) * (r[closestIndex] + newR);
  y[currentCount] = y[closestIndex] + sin(angle) * (r[closestIndex] + newR);
  r[currentCount] = newR;
  currentCount++;

  for (var i = 0; i < currentCount; i++) {
    if (i == 0) {
      noStroke();	// no stroke for first point
    } else {
      stroke(mouseY/20 + i/20, mouseX/20 + i/20, 20);	// stroke colour depends on mouse pos
    }
    line(x[i], y[i], x2[10] , y2[10] );	// creating lines
  }

}
