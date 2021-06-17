
/**Description

This is artwork is a space themed audio visualiser

**/

/** Instructions

If this is the first time opening, please press allow for microphone input

If some componenets are not working, please load using Firefox or Internex Explore/Edge
because Chrome and modern browsers dont support using microphone.



**/

let mic;
let fft;
let bg;
let floaters = [];
let stars = [];

function preload(){

 bg = loadImage('spaceBackground.jpg');

}


function setup(){ // sets up the artwork
  createCanvas(500, 500); // creates a square canvas of resolution 720 pixels


 mic = new p5.AudioIn();
 fft = new p5.FFT(); //a fast fourier transform that analyzes individual audio frequences within a waveform
 fft.setInput(mic) //set the fft to listen to the microphone input

 mic.start();
 colorMode(HSB, 100); //Hue Saturation brightness

 //load Image



 //colorMode(HSB,100);
 for(var i = 0; i<80;i++){
   floaters.push(new FloatingSquare(random(width), random(height),fft,mic));
 }

 for( i = 0; i<200; i++){
   //stars.push(new Star(random(width),random(height),random(80),random(80)));
 }

}

function draw(){ // draws the artwork
  imageMode(CORNER) //will start from the upperleft corner of the location
  image(bg,0,0,bg.width,bg.height)
  bg.resize(0,0)

  let bass,lowMid, mid, highMid, treble;
  let volume = mic.getLevel();

  fft.analyze();

  bass = fft.getEnergy("bass"); //gets the bass range
  lowMid = fft.getEnergy("lowMid");
  mid = fft.getEnergy("mid");
  highMid = fft.getEnergy("highMid");
  treble = fft.getEnergy("treble");

  //some microphones are more powerful than others, this will help even the range out
  volume = (volume * 100)
  let bassthreshold = (170-(volume*10)) ;

  let centroid = fft.getCentroid(); //gets the average at which most frequences lie
  let saturation = map(bass, 20,200, 50,100); //higher base values means more saturated colours
  console.log("centroid:" + centroid + " bass:" + bass + "Vol: " + volume);
  console.log("bassthreshold "+ bassthreshold)


  //if bass is high enough then show increase the intensity of the colours
  //change the background if bass is high enough to add more impact
  if(bass>bassthreshold){
    background(80,saturation, 50, 60)
  }else{
    background(0,20, 50, 10)
  }
 for( i = 0; i<stars.length; i++){
    stars[i].show();
   console.log(stars.length)
  }

  /**Display Floaters**/

  for(var i = 0; i<floaters.length; i++){
    floaters[i].display();
    floaters[i].move();
  }

  let spectrum = fft.analyze();
  //Line in the middle
  strokeWeight(2)
  stroke(255)

  console.log(spectrum.length)

  //draw Spectrum
  noFill()
  //spectrum from halfway to rightside
  beginShape(); //dynnamically creates a shape
  for (let i = 0; i < spectrum.length; i++) {
    vertex(i+width/2, map(spectrum[i], 0, 255, height/2,height/4 ));
  }
  endShape()
  //spectrum from halfway to left side
  beginShape();
  for (let i = spectrum.length -10; i > 0; i--) {
    vertex(-i+width/2, map(spectrum[i], 0, 255, height/2,height/4 ));
  }
  endShape()
  //spectrum from halfway to right side flipped on y
  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    vertex(i+width/2, map(spectrum[i], 0, 255, height/2,height-height/4 ));
  }
  endShape()
  //spectrum from halfway to left side flipped on y
  beginShape();
  for (let i = spectrum.length -10; i > 0; i--) {
    vertex(-i+width/2, map(spectrum[i], 0, 255, height/2,height-height/4 ));
  }
  endShape()

}

class FloatingSquare{

  constructor(x,y,fft,audioInput){ //allows us to have inputs for when creating the object
    this.x = x;
    this.y = y;
    this.fft = fft;
    this.audio = audioInput;
    this.initSize = random(5,35);
    this.speed = random(0.1,1);
    this.ySpeed = random(0.1,3)
    this.img = loadImage('StarGlow.png');

  }

  move(){
    this.x += this.speed;
    this.y += this.ySpeed * cos(this.fft.getEnergy("highMid")); //higher frequences make it float higher
     if(this.x > width+10){ //if past the screen width, move to the other side

      this.x= -10;
      this.y = random(height);
    }


  }

  display(){

    ellipseMode(RADIUS);

    fft.analyze();
    let volume = this.audio.getLevel();
    volume = map(volume, 0, 1, 0,10);

    //glow image
    imageMode(CENTER);
    image(this.img,this.x, this.y, 4*this.initSize*volume, 4*this.initSize*volume)


    fill(255)
    strokeWeight(0)
    ellipse(this.x, this.y, this.initSize*volume);

    //image(this.img,this.x, this.y, 3*this.initSize*volume, 3*this.initSize*volume)


  }
}

class Star{
  constructor(x,y,starWidth,starHeight){
    this.x = x;
    this.y = y;
    this.starWidth = starWidth;
    this.starHeight = starHeight;

  }

  show(){
    stroke("white");
    line(this.x-(this.starWidth/2),this.y,this.x+this.starWidth/2,this.y);
    line(this.x,this.y-(this.starHeight/2),this.x,this.y+(this.starHeight/2));
    line(this.x-(this.starWidth/2),this.y-(this.starHeight/2),this.x+(this.starWidth/2),this.y+(this.starHeight/2))
    line(this.x+(this.starWidth/2),this.y-(this.starHeight/2),this.x-(this.starWidth/2),this.y+(this.starHeight/2))


  }



}
