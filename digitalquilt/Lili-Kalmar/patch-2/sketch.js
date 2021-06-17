var lyrics;
var d;
let song;
//setting up all the variants needed for the code
function preload() {
  lyrics = loadStrings('assets/lines.txt');
  hun = loadStrings('assets/hun.txt');
  soundFormats('mp3','ogg');
  song = loadSound('assets/song.mp3');
  //loading the text file so it's ready to be used
}

function setup() {
  createCanvas(500, 500);
  print(lyrics);
  d = width/10;
  //creating a canvas and setting d/distance up

}

var c = 0; //adding a variant to count how many times the key has been pressed
function draw() {
  background(230);
  for (var i = 0; i < c; i++) {
//adding in all the lines of the song, each a certain distance from the edge of the square
    text(lyrics[c-1],50,d);
    text(lyrics[c],50,2*d);
    text(lyrics[c+1],50,3*d);

    text(hun[c-1],50,5*d);
    text(hun[c],50,6*d);
    text(hun[c+1],50,7*d);
  }
}
//counting how many times the key was pressed by adding to var c each time
function keyPressed() {
  if (keyCode === ENTER) {
    c++
  }
  //here I tried so you could start the actual music with a different key but not working
  if (keyCode === TAB) {
    if (song.isPlaying()) {
    song.stop();
    }
    else {
    song.play();
    }
  }
}
