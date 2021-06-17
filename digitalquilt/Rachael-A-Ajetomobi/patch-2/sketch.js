var uptownColor;


function setup() {
  createCanvas(500,500);
  colorMode(HSB);
  noStroke();

  uptownColor = color(60,100,85);
}

function preload(){
  gif = loadImage("source.gif");
};

// the different elements of the poster being drawn
function draw(){
  background(0);

  textSize(65);
  textStyle(NORMAL)
  textAlign(CENTER, CENTER);
  stroke(0)
  fill(167);
  textFont('Oi');
  text ("BLACK LIVES MATTER",0,0,width/1.111111111,height/1.25);

// adding a gif
  image(gif, width-(gif.width*0.2), height-(gif.height*0.2), gif.width*0.2, gif.height*0.2);

  textSize(30);
  textAlign(CENTER, TOP);
  fill(50);
  textFont('Kristi'); // uploaded fonts from google fonts 
  text("#SAYTHIERNAMES",width/3.33333333,height/1.96078431);


  textSize(50);
  textAlign(CENTER, TOP);
  fill(75);
  textFont('Lobster');
  text("STOP KILLING \n  BLACK PEOPLE",width/3.33333333,height/1.5625);


  textSize(65);
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  fill(50);
  textFont('Ballet');
  text("Support the \n movement", width/1.42857143,height/6.66666667);


  textSize(20);
  textStyle(BOLD);
  fill(87);
  textFont('Helvetica');
  text("I'M TIRED OF BEING PERCEIVED AS AGGRESSIVE",width/2,height/16.6666667);

}

// allowing for interactivity with the poster
let gif;

function mousePressed(){
  gif.pause();

}
function mouseReleased(){
  gif.play();
}
