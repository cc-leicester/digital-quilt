var song;
var fft;
var button;
var mic;

var volHistory = [];
var w;
var rand;
var r;
var g;
var b;
var a;



function replay() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }

}

function preload() {
  song = loadSound('Rubab.mp3');
}

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  song.play();

  fft = new p5.FFT(0.5, 64);
  w = width / 64;

  mic = new p5.AudioIn();
  mic.start();

 r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200,255);
}

function draw() {
  background(0,0,153);
  var spectrum = fft.analyze();
  stroke(r,g,b);

fill(random(255,255,255));
  for (i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    strokeWeight(1.5);
    line(i * w, y, w * i, height - y);
  }



  var vol = mic.getLevel(); // detects mic volume
  fill(r,g,b,a );
  ellipse(width / 2, height / 2, 200, vol * 200);  
  fill(r,g,b);
  ellipse(width /1.2, height / 2, 100*1.5, vol * 200);

}
function mouseClicked()
{
  replay();
  
}