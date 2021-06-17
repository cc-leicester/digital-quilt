// please, add the description of this artwork here.
// please, add the instruction on how to interact here.
// please, add any other important information for the comprehension of the code
//References:
//Youtube.com. 2021. Before you continue to YouTube. [online] Available at: <https://www.youtube.com/watch?v=uk96O7N1Yo0>
//Youtube.com. 2021. Before you continue to YouTube. [online] Available at: <https://www.youtube.com/watch?v=ktPnruyC6cc> 


var song; //creating variables for the song images and button
let img1;
var button;
var fft

function setup(){ // sets up the artwork
  img1 = loadImage('AOT2.jpg');
  createCanvas(510, 720); // creates a square canvas of resolution 720 pixels
    song = loadSound('AOTS2.mp3', loaded); //loads the sound
  button = createButton('play'); //creates the play button for the song
  button.mousePressed(togglePlaying);

angleMode(DEGREES);
  fft = new p5.FFT();

}

function draw(){ //draws the background
background(img1); //the background will be loaded as the image

strokeWeight(3)
noFill();




translate(width / 2, height /2); //this is the position of the wave
//creating a sound wave to show the frequency of the sound file
var wave = fft.waveform(); //creating the variable for the wave

for (var t = -1; t <=1; t +=2){
beginShape();
for (var i = 0; i <= 180; i+= 0.5) {
var index = floor(map(i, 0, 180, 0, wave.length - 1));

var r  = map(wave[index], -1, 1, 75, 50);


var x = r * sin(i) * t
var y = r * cos(i) //this is the position of the wave
vertex(x, y);
//where we will be adding colour to the waves, using the sin and cos function
var e = map(sin(frameCount), - 1, 1, 50, 255);
var g = map(cos(frameCount) / 2, -1, 1, 50, 255);
var b = map(sin(frameCount) / 4, -1, 1, 50, 255);

stroke(e, g, b);

}
endShape();
}

beginShape();
for (var i = 0; i <= 180; i+= 0.5) {
var index = floor(map(i, 0, 180, 0, wave.length - 1));

var r  = map(wave[index], -1, 1, 50, 300);


var x = r * -sin(i);
var y = r * cos(i); //this is the position of the wave
vertex(x, y);

}
endShape();
beginShape();
for (var i = 0; i <= 180; i+= 0.5) {
var index = floor(map(i, 0, 180, 0, wave.length - 1));

var r  = map(wave[index], -1, 1, 50, 300); //changes the size of the circle


var x = r * sin(i);
var y = r * cos(i); //this is the position of the wave
vertex(x, y);

}
endShape();

}






function loaded(){
  console.log('loaded');  //load
}

function togglePlaying(){
if (!song.isPlaying()) { //playing the song
  song.play();
  song.setVolume(10); //how loud the song will be
  button.html('pause'); //making the button pausable
}
  else {
    song.pause();
    button.html('play'); //when the
  }

}
