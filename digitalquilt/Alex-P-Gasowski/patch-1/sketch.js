
// This is a generative mozaic artwork
// To draw, press and hold left-mouse-button while moving the cursor over the canvas
// Size of dots can be adjusted using numbers 1 - 5 on the keyboard
// Axis of symmetry can be toggled using numbers 6 - 9 on the keyboard
// All axis are turned on at the start
// number 6 - toggle horizontal axis for vertical mirror
// number 7 - toggle vertical axis for horizontal mirror
// number 8 - toggle diagonal axis (bottom-right to top-left) for diagonal mirror (bottom-left to top-right)
// number 9 - toggle diagonal axis (bottom-left to top-right) for diagonal mirror (bottom-right to top-left)
// To pause or resume the drawing process press Space

//References:
  //Bohnacker, H., Lazzeroni, C., Laub, J., Gross, B., 2012. P_2_3_7_01, Generative Design,
  //[Online] Available:http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_3_7_01,
  //[Accessed May 3, 2021].

var brushes = [];
var brush_color;
var pause = false;
var brush_size = 3

var mir_ver = true;
var mir_hor = true;
var mir_dia_1 = true;
var mir_dia_2 = true;

function setup() {
  createCanvas(500, 500);
  background("black")
}


function draw() {
  //for every brush in brushes list spawn it with updated position
  for (brush of brushes){
    brush.brushX += random(-5, 5);
    brush.brushY += random(-5, 5);
    brush.show();
  }
  // when mouse pressed spawn add a new brush to list to be spawned
  if (mouseIsPressed && mouseButton == LEFT){
    // new brush position
    let x = mouseX;
    let y = mouseY;
    // brush size according to preset
    let brushW = brush_size;
    let brushH = brush_size;
    // new brush colour
    let brush_color = color(random(255), random(255), 255, random(70, 120));
    // add new brush instance to the brushes list
    append(brushes, new Brush(x, y, brushW, brushH, brush_color));
  }
}


class Brush {
  constructor(brushX, brushY, brush_width, brush_height, brush_color){
    this.brushX = brushX;
    this.brushY = brushY;
    this.brush_width = brush_width;
    this.brush_height = brush_height;
    this.brush_color = brush_color;
  }

  // spawn brush and additional 7 according to symmetry
  show(){
    noStroke();
    fill(this.brush_color);

    //Method for symmetry axes below has been based on P_2_3_7_01 code

    // cursor brush
    ellipse(this.brushX, this.brushY, this.brush_width, this.brush_height)
    // brush mirrored horizontally
    if (mir_hor || mir_dia_2 && mir_dia_1 && mir_ver){
      ellipse(width - this.brushX, this.brushY, this.brush_width, this.brush_height)
    }
    // brush mirrored vertically
    if (mir_ver || mir_dia_2 && mir_dia_1 && mir_hor){
      ellipse(this.brushX, height - this.brushY, this.brush_width, this.brush_height)
    }
    // brush mirrored horizontally and vertically
    if (mir_ver && mir_hor || mir_dia_2 && mir_dia_1){
      ellipse(width - this.brushX, height - this.brushY, this.brush_width, this.brush_height)
    }
    // X and Y reversed to mirror all again
    if (mir_dia_1 || mir_dia_2 && mir_ver && mir_hor){
      ellipse(this.brushY, this.brushX, this.brush_width, this.brush_height)
    }
    if (mir_dia_1 && mir_hor || mir_dia_2 && mir_ver){
      ellipse(this.brushY, width - this.brushX, this.brush_width, this.brush_height)
    }
    if (mir_dia_1 && mir_ver || mir_dia_2 && mir_hor){
      ellipse(height - this.brushY, this.brushX, this.brush_width, this.brush_height)
    }
    if (mir_dia_1 && mir_ver && mir_hor || mir_dia_2){
      ellipse(height - this.brushY, width - this.brushX, this.brush_width, this.brush_height)
    }
  }
}


function keyPressed() {
  //pause on
  if (keyCode == 32 && pause == false){
    noLoop();
    pause = true;
  }
  // pause off
  else if (keyCode == 32 && pause == true){
    loop();
    pause = false;
  }

  // change brush sizes
  if (key == "1"){
    brush_size = 2
    pause = false;
  }
  if (key == "2"){
    brush_size = 3
    pause = false;
  }
  if (key == "3"){
    brush_size = 4
    pause = false;
  }
  if (key == "4"){
    brush_size = 5
    pause = false;
  }
  if (key == "5"){
    brush_size = 6
    pause = false;
  }

  // toggle axis of symmetry on and off
  // toggle horizontal axis for vertical mirror
  if (key == '6'){
    mir_ver = !mir_ver;
  }
  // toggle vertical axis for horizontal mirror
  if (key == '7'){
    mir_hor = !mir_hor;
  }
  // toggle diagonal axis (bottom-right to top-left) for diagonal mirror (bottom-left to top-right)
  if (key == '8'){
    mir_dia_1 = !mir_dia_1;
  }
  // toggle diagonal axis (bottom-left to top-right) for diagonal mirror (bottom-right to top-left)
  if (key == '9'){
    mir_dia_2 = !mir_dia_2;
  }
}
