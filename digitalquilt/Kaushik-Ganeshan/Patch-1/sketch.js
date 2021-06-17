
//This is the variables needed for the project. One for the image and one for the canvas
var img;
var cnv;
function preload(){
  img = loadImage('assets/train_img.png')  //loads the png file from the assests folder
}

function setup() {
  cnv = createCanvas(img.width, img.height);  //sets the overal width of the canvas to be of the image height and width

//from here to line 29, the code was taken and adapted from Zhang, Weidi. (2021) P5.js Tutorial | Create a generative art using image data [Online] Available from: https://www.youtube.com/watch?v=me04ZrTJqWA [Accessed 19 April 2021]
  var newCanvasX = (windowWidth - img.width)/2;
  var newCanvasY = (windowHeight - img.height)/2;

  for(var col = 0; col<img.width; col+=2){
    for(var row = 0; row<img.height; row+=2){

      var xPos = col;
      var yPos = row;
      let c = img.get(xPos, yPos);
      push();
      translate(xPos, yPos);
      rotate(radians(random(360))) //randomply rotaes the curves 360 degrees across the image
      noFill();
      stroke(color(c))
      strokeWeight(random(2));  //The weight of the marks being applied to the image
      point(xPos, yPos);  //This adds points to the image withnin the x and y axis
      strokeWeight(random(1)); //the weight of the points on the image

      //This shows the curves being added to the image to make it more abstract
      curve(xPos, yPos, sin(xPos) * 60, cos(yPos) * sin(xPos) * 40, 0, 0, cos(yPos) * sin(xPos) * 140, cos(yPos) * sin(xPos) * 50)
      pop();
    }
  }
}
