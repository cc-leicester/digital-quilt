
// This is a moving picture illusion based on barrier-grid animation and stereography
// To view animation move the striped page.
// To move the striped page, use left and right arrow keys OR hold left mouse and drag it.
// Speed of striped page movement can be adjusted using numbers 1 - 3 on the keyboard (applies only to arrows)
// number 1 - slow
// number 2 - optimal (default)
// number 3 - fast

// All code developed by Aleksander Gasowski

var gears = [];
var layers = [];
var position = 0;
var overflow = 30;
var frame_step = 2;
var mov_pag_X;

function setup() {
  createCanvas(500, 500,);
  angleMode(DEGREES);
  frameRate(30);

  // initial overlay page position
  mov_pag_X = -width + overflow;


  // create six layers for holding frames of the animation
  for(i = 0; i < 6; i++){
    layer = createGraphics(width, height);
    // add layers to list
    append(layers, layer);
  }
  // top layer for overlay page
  moving_page = createGraphics(width, height);
  let x;
  let y = 360;
  let rot = 0;
  let ind;
  let gear_offset = 220;
  let gear_convergence = 280;

  // put prepared gears on layers
  // for each layer
  for(i = 0; i < 6; i++){
    ind = i;
    // for each gear on layer
    for(j = 0; j < 2; j++){
      // gear x position
      x = gear_offset + (gear_convergence * j);
      // left gear rotation
      if (j == 0){
        rot = (22.5 * j) + (7.5 * i);
      }
      // left gear rotation
      else if (j == 1){
        rot = -(22.5 * j) - (7.5 * i);
      }
      // create object from class Gear and add to list
      append(gears, new Gear(x, y, rot, ind));
    }
  }
  // show all gears
  for (gear of gears){
    gear.show();
  }
}


function draw() {
  background(245);

  // for all layers create image from prepared layer to make it visible
  for(i = 0; i < 6; i++){
    image(layers[i], 0, 0, width, height);
  }

  // create stripes of the overlay page
  moving_page.noStroke();
  moving_page.fill("black");
  moving_page.rect(-0, 0, width, height);
  moving_page.erase();
  moving_page.strokeWeight(10);
  for(i=1; i<65; i++){
    moving_page.rect(-12+(i*12), 0, 2, height);
  }
  moving_page.noErase();



  // stop overlay page from going over right border
  if (mov_pag_X > width - overflow){
    mov_pag_X = width - overflow - 1;
  }
  // stop overlay page from going over left border
  if (mov_pag_X < -width + overflow){
    mov_pag_X = -width + overflow + 1;
  }

  // create image from prepared overlay page to make it visible
  image(moving_page, mov_pag_X, 0, width, height)

  // movement of overlay page right
  if (!mouseIsPressed && keyIsDown(RIGHT_ARROW) && mov_pag_X <= width - overflow){
    mov_pag_X = mov_pag_X + frame_step;
  }
  // movement of overlay page left
  if (!mouseIsPressed && keyIsDown(LEFT_ARROW) && mov_pag_X >= -width + overflow){
    mov_pag_X = mov_pag_X - frame_step;
  }
  // control of overlay page with mouse
  if (mouseIsPressed){
    let step = mouseX - pmouseX
    if (step > 0 && mov_pag_X <= width - overflow){
      mov_pag_X = mov_pag_X + step;
    }
    if (step < 0 && mov_pag_X >= -width + overflow){
      mov_pag_X = mov_pag_X + step;
    }
  }
}


class Gear {
  constructor(gearX, gearY, rotation, index){
    this.gearX = gearX;
    this.gearY = gearY;
    this.rotation = rotation;
    this.index = index;
  }

  // assembly of gears from basic shapes
  show(){
    let this_layer = layers[this.index]
    this_layer.noStroke();
    this_layer.fill("black");
    this_layer.angleMode(DEGREES);
    this_layer.translate(this.gearX, this.gearY);
    this_layer.rotate(this.rotation);
    this_layer.ellipse(0, 0, 250);

    // gear teeth
    for(i = 0; i < 8; i++){
      this_layer.rotate(45 * i);
      this_layer.quad(-30, -120, 30, -120, 22, -150, -22, -150);
      this_layer.rotate(-(45 * i));
    }

    // gear holes
    this_layer.erase();
    this_layer.ellipse(0,0,70);
    for(i = 0; i < 8; i++){
      this_layer.rotate(45 * i);
      this_layer.ellipse(80, 0, 30);
      this_layer.rotate(-(45 * i));
    }

    // restoring translate and rotate modifiers
    this_layer.rotate(-this.rotation);
    this_layer.translate(-this.gearX, -this.gearY);

    // slicing gear with stripes with offset
    for(i = 1; i < 65; i++){
      this_layer.rect(-12 + (this.index * 2) + (i*12), 0, 10, height);
    }
    this_layer.noErase();
  }
}

// change step of the overlay page movement
function keyPressed() {
  if (key == "1"){
    frame_step = 1;
  }
  if (key == "2"){
    frame_step = 2;
  }
  if (key == "3"){
    frame_step = 3;
  }
}
