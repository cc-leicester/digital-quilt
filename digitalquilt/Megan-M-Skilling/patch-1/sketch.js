let diameter, xCircle, yCircle;
let img;
let t = 'Sometimes the storm doesnt pass and whatever doesnt kill you can leave you injured for life';
let mySound;
var slider;
var button;
let playing = false;
let myVideo;

function preload() {
  img = loadImage('Assets/Untitled-1.jpg');
  soundFormats('mp3','ogg');
  mySound = loadSound('Assets/Adams_Song');         //this makes it so my patch doesnt load till these items have loaded//
  myVideo = createVideo(['Assets/Lonely.mp4']);
  gif = loadImage('Assets/mental.gif');
}

function setup() {
  let cnv  = createCanvas(500,500);  // this is my canvas size //
  cnv.mousePressed(clickInCanvas);
  this.diameter = 100; //this is how wide each circle is//
  xCircle = width/2;
  yCircle = height/2;
  cnv.mousePressed(canvasPressed);
  button = createButton("play"); // this created the play button//
  button.position(330,140); //this is where the play button is located//
  button.mousePressed(togglePlaying);
  slider = createSlider(0, 1, 0.5, 0.01); // this is the range of loudness//
  slider.position(205,260); //This is the location of my volume slider//
  button2 = createButton("start"); // this created the start button//
  button2.position(250,290); // this is the position of the start button//
  button.mousePressed(toggleVideo);
  myVideo.size(120,120); // this is the size of my video//
  myVideo.position(290,40); //this is the location of my video//
}

function draw() {
  background("black"); //this makes my background white//

  stroke('white'); // this is the colour of my line//
  line(320,80,50,100);// the location of my line//

  stroke('white');// this is the colour of my line//
  line(320,310,310,100);// the location of my line//

  stroke('white');// this is the colour of my line//
  line(100,400,280,90);// the location of my line//

  stroke('white');// this is the colour of my line//
  line(400,400,300,230);// the location of my line//

  stroke('white');// this is the colour of my line//
  line(140,400,100,80);// the location of my line//

  stroke('white');// this is the colour of my line//
  line(380,380,120,380);// the location of my line//

  fill('white');// this is the colour of my circle//
  ellipse(80,70,140,140);// the location of my circle//
  image(img, 40, 35); // the location of my picture//

  fill("white");// this is the colour of my circle//
  ellipse(120,400,140,140); // the location of my circle//
  fill('black'); // this is the colour of my text//
  textSize(12); // this is the size of my text//
  textAlign(CENTER,TOP); // this is where the text is aligned//
  text(t,63,360,120,120); // this is the position of my text in pixels//

  fill("white");// this is the colour of my circle//
  ellipse(270,270,140,140);// the location of my circle//
  mySound.setVolume(slider.value()); //this makes it so the volume is controlled by a slider

  fill("white");// this is the colour of my circle//
  ellipse(350,100,140,140);// the location of my circle//

  fill("white");// this is the colour of my circle//
  ellipse(380,420,140,140);// the location of my circle//
  image(gif,335,370,[90],[90]); // the location of my gif//
}

function togglePlaying(){
  if (!mySound.isPlaying()) {
    mySound.play();  // this is saying if my song is playing the button will say stop//
    button2.html("stop");
  }
  else {
    mySound.stop();
    button2.html("start"); // this is saying if my song is not playing the button will say start//
  }
}

this.clicked = function() {
   var d = dist(mouseX, mouseY, this.x, this.y);
   if(d < this.diameter/2)
   2
 }

function clickInCanvas(){
print("mouse clicked in the canvas");
    if (mouseX > xCircle-(diameter/2) && mouseX < xCicle+(diameter/2)){
      if (mouseY > yCircle-(diameter/2) && mouseX < xCircle+(diameter/2))
      print("i'm in the circle");
    }
    else{
      print("I'm not in the circle");
    }
}

function canvasPressed(){
  mySound.play();
}

function toggleVideo() {
  if (playing){
    myVideo.pause(); // this is saying if my video is not playing the button will say play//
    button.html("play");
    playing = false;
  }
  else {
    myVideo.play();
    playing = true; // this is saying if my video is playing the button will say pause//
    button.html("pause");
  }
}
