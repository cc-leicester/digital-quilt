let strokeX = 1;
let strokeY = 1;

function setup() {
  createCanvas(500, 500);
  frameRate(1);
}

function draw() {
  background(150);
  for (let x = 0; x < 800; x += 20)
    for (let y = 0; y < 800; y += 20)
      drawDiagonalLine(Math.random() >= 0.5, x, y)
}

function drawDiagonalLine(direction, x, y) {
  if (direction) {
    strokeWeight(strokeX)
    line(x, y, x + 20, y + 20);
  }
  else {
    strokeWeight(strokeY)
    line(x + 20, y, x, y + 20);
  }
}

function mouseMoved() {
  strokeX = map(mouseX, 0, 800, 1, 15)
  strokeY = map(mouseY, 0, 800, 1, 15)
}

function keyPressed() {
  if (keyCode === LEFT_ARROW)
    strokeCap(SQUARE);
  else if (keyCode === RIGHT_ARROW)
    strokeCap(ROUND);
  else if (keyCode === UP_ARROW)
    strokeCap(PROJECT);

}