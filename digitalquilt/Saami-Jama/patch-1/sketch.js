var x = [],
  y = [],
  segNum = 40,
  segLength = 30;

for (var i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(500, 500);  // canvas creation 
  strokeWeight(10);
  stroke(255,90,190, 100);
  
  

  
}

function draw() {
  
  background('#000000');         //liner shape formed
  
  dragSegment(0, mouseX, mouseY);
  for( var i=0; i<x.length-1; i++) {
    dragSegment(i+1, x[i], y[i]);
  }
  
}

function mousePressed() {
  segNum = segNum + 3;
}

function dragSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);             // the dragsegment to keep them toghteher 
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  ellipse(0, 0, segLength/5, segLength/2);   //segment shapes
  //circle(0, 0, segLength, 0);
  pop();
}


