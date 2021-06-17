// please, add the description of this artwork here.
// please, add the instruction on how to interact here.
// please, add any other important information for the comprehension of the code


let textBox;
var textOut;
let particles = [];
let bg;
let textBg;
let font;
let points;
let colour
let scale;
let boxes = [];
let mousePosX;
let timer = 0;

function preload(){
  font = loadFont('BebasNeue-Regular.otf');
}

function setup(){ // sets up the artwork
  createCanvas(500, 500); // creates a square canvas of resolution 720 pixels
  textBox = document.getElementById("textInput");
  colorMode(HSB, 100);
  // hue, saturation , brightness
  colour = color(127, 255, 0);

   for(var i = 0; i<10;i++){
     boxes.push(new floatingBoxes(random(width),random(height),random(24,48)))
   }
}

function draw(){ // draws the artwork

  scale = width/720;

  particles = [] //clearing the particles array
   mousePosX = map(mouseX, 0, width,0,100);
  var mousePosY = map(mouseY,0,720,0.5,1.8);
  //console.log(mouseX);
  console.log(scale)

  background(0);

  for(var i = 0; i<boxes.length; i++){
    boxes[i].update();
    boxes[i].display();

  }

  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    translate(width / 2, height / 2);

    var circleResolution = 4;
    var radius = mouseX - width / 2;
    var angle = TAU / circleResolution;
    strokeWeight(8)
    stroke(mousePosX,50,20);
    fill(0)

    beginShape();
    for (var i = 0; i <= circleResolution; i++) {
      var x = cos(angle * i) * radius;
      var y = sin(angle * i) * radius;
      vertex(x, y);
    }
    endShape();

    pop();
  }

 //create points based of whats in the text box
 points = font.textToPoints(textBox.value, 0, 0, 200 * scale, {
   sampleFactor: .1 / scale,
   simplifyThreshold: 0
 });   //higher sample factor means more points

 //when the window is scaled down, it needs a higher samplefactor
 var bounds = font.textBounds(textBox.value, 0, 0, 200 * scale);

 //console.log(bounds)
 translate(width - width/2 - (bounds.w/1.7),height-height/2 + (bounds.h/3));

 for (let i = 0; i < points.length; i++) {

   //adding new particles
    particles.push(new particle(points[i].x,points[i].y,random(7,20*mousePosY) * scale,random(7,12)*scale,random(0.1,1),mousePosX));
    particles[i].display();

 }

}

class particle{
  constructor(x,y,width,height,size,inColor){
    this.size = size;
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.color = color(inColor + random(-6,6),255,100);
    this.speed = random(0.4,30);


  }


  display(){
    push() //so it does not effect other elements
    strokeWeight(0)
    fill(this.color)
    rectMode(CENTER);
    rect(this.x, this.y,this.width, this.height, 20);
    pop()


  }



}

class floatingBoxes{

 constructor(x,y,size){
      this.x = x;
      this.y = y;
      this.size = size;
      this.position = createVector(random(width),random(height));
      this.velocity = createVector();
      this.acceleration = createVector();
      this.topspeed = 5;


 }

 display(){
   push()
   strokeWeight(3.4);
   stroke(color(mousePosX + random(-6,6),100,80))
   fill(0,0,0,0);
   rectMode(CENTER)
   rect(this.position.x,this.position.y,this.size,this.size)
   rect(this.position.x,this.position.y,this.size/2,this.size/2)

   pop()
 }

  update(){

    //create a vector from random location
    var target = createVector(random(width),random(height));
    console.log(target)
    this.acceleration = p5.Vector.sub(target,this.position);
    this.acceleration.setMag(0.01)

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);

  //  if(abs(dist(this.position.x,this.position.y,target.position.x,target.position.y)) < 30){
    //  target = createVector(random(width),random(height));

  //  }

  }


}




function keyPressed() {
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    if (textBox.value.length > 0) {
      textBox.value = textBox.value.substring(0, textBox.value.length - 1);
      loop(); //restart the draw function
    }
  }


}

function keyTyped() {
  if (keyCode >= 32) {
    textBox.value += key;
    loop();
  }
}
