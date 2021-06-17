let cat;
let flipcat;
let catx;
let caty;
let catdesx;
let catdesy;
let lying;
let yarn;
let yarnx;
let yarny;
let yarnmtmx;
let yarnmtmy;
let slider;
let traillist = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];



function preload() {
  flipcat = loadImage("catleft.gif");
  cat = loadImage("catright.gif");
  catlie = loadImage("catlier.gif");
  flipcatlie = loadImage("catliel.gif");
  catup = loadImage("catupr.gif");
  flipcatup = loadImage("catupl.gif");

  yarn = loadImage("yarn.png");
}
function setup() {
  createCanvas(600,600) ;
  frameRate(30);
  background(255,255,255);
  slider = createSlider(100000,1000000,100000,100000)
  slider.position(10,10)
  facingright = true;
  catx = width*.5;
  caty = height*.5;
  yarnx = 400;
  yarny = 100;
  yarnmtmx = 0;
  yarnmtmy = 0;
  catdesx = yarnx - 25 ;
  catdesy = yarny - 25 ;


}

function draw(){
  background(255,255,255);
  drawCat();
  drawYarn();

}

function drawCat() {
  catdesx = yarnx -75 ;
  catdesy = yarny -75 ;
  catx += (-(catx-catdesx) / 10);
  caty += (-(caty-catdesy) / 10);

  if ((abs(-(catx-catdesx))< 1) && (abs(-(caty-catdesy))< 1)){
    print("liedown")
    cat.pause();
    flipcat.pause();
    if ((-(catx-catdesx) / 10)< -1) {
      image(flipcatlie,catx, caty, 100, 100);
      if (flipcatlie.getCurrentFrame() == flipcatlie.numFrames()-1) {
        flipcatlie.pause();
      }
      else{
        flipcatlie.play()
      }

    }
    else {
      image(catlie,catx, caty, 100, 100);
      if (catlie.getCurrentFrame() == catlie.numFrames()-1) {
        catlie.pause();
      }
      else {
        catlie.play()
      }
    }
}



  else {
    cat.play();
    flipcat.play();
    catlie.setFrame(0)
    flipcatlie.setFrame(0)
    lying = false
    if ((-(catx-catdesx) / 10)< -1) {
      image(flipcat,catx, caty, 100, 100);

    }
    else {
      image(cat,catx, caty, 100,100);
    }
  }

}

function drawYarn() {
  yarnmtmx += (yarnx-mouseX+12.5)*(10000+sqrt(sq(yarnx-mouseX+12.5)+sq(yarny-mouseY)));
  yarnmtmy += (yarny-mouseY+12.5)*(10000+sqrt(sq(yarnx-mouseX+12.5)+sq(yarny-mouseY)));
  yarnmtmx *= 0.9;
  yarnmtmy *= 0.9;

  yarnx -= (yarnmtmx/slider.value());
  yarny -= (yarnmtmy/slider.value());
  stroke(255,192,203);
  line(yarnx+12.5, yarny+12.5, mouseX, mouseY);
  traillist = [[yarnx+12.5,yarny+12.5],traillist[0],traillist[1],traillist[2],traillist[3],traillist[4],traillist[5],traillist[6],traillist[7]];
  for (i = 1; i < traillist.length; i++) {
    fill(255,192,203,255/i)
    ellipse(traillist[i][0], traillist[i][1], 25-i*2, 25-i*2);
    image(yarn, yarnx, yarny, 25,25);
  }
}
