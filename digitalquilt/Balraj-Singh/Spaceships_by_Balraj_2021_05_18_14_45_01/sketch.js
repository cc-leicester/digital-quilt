let pic1;
let pic2;
let pic3;

let posX = 0;
let posY = 0;
let size1 = 100;
let size2 = 200;
function preload() {
  pic1 = loadImage("cloud1.png");
  pic2 = loadImage("hot1.png");
  pic3 = loadImage("hot2.png");

}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(135, 206, 235);

  image(pic1, posX, 50, 300, 200);

  image(pic1, 400 - posX, 50, 300, 200);

  image(pic2, posX, posY, size1, size1 + 20);

  image(pic3, 200, 400 - posY, size2, size2 + 20);

  if (posX > width || posY > height) {
    posX = 0;
    posY = 0;
    size1 = 100;
    size2 = 200;
  } else {
    posX += 0.9;
    posY += 0.9;
    size1 += 0.2;
    size2 -= 0.25;
  }
}
