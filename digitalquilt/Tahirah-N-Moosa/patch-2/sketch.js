// This is an animation with sound illustrating poem by Jalaluddin Rumi, "When I Die".
// There is no interaction

/*REFERENCES
ag3439 (2017) stars. Available at: https://editor.p5js.org/ag3439/sketches/Skgh1ZQtQ (Accessed: 19 May 2021).

All Poetry (n.d.) When I Die by Mewlana Jalaluddin Rumi Available at: https://allpoetry.com/poem/14327689-When-I-Die-by-Mewlana-Jalaluddin-Rumi (Accessed: 19 May 2021).

Di Donato, B. (2021) ‘Digital Quilting’ [Tutorial BDD Year 1], CO1110: Digital Arts Lab. University of Leicester, 21 January.

Di Donato, B. (2021) ‘W26 Animation’ [Workshop Group BDD Year 1], CO1110: Digital Arts Lab. University of Leicester, 9 March.

Ombre Sunset Colors Wallpaper (n.d.) Available at: https://www.walpaperlist.com/2020/01/ombre-sunset-colors-wallpaper.html (Downloaded: 19 ‎May ‎2021).

p5js (n.d.) reference | push(). Available at: https://p5js.org/reference/#/p5/push (Accessed: 19 May 2021).

The Coding Train (2015) 7.4: The Constructor Function in JavaScript - p5.js Tutorial. Available at: https://youtu.be/F3GeM_KrGjI (Accessed: 19 May 2021).

The Coding Train (2017) 9.1: Transformations Pt.1 (Translate, Rotate, Push/Pop) - p5.js Tutorial. Available at: https://youtu.be/o9sgjuh-CBM (Accessed: 19 May 2021).

toppng (n.d.) sun png. Available at: https://toppng.com/show_download/27002/sun/large (Downloaded: 19 May 2021).

ZapSplat (n.d.) Sound effects available at: https://www.zapsplat.com/ (Accessed: 19 May 2021)

*/

//global variables
let x = 0; //x and y positioning variables initialy 0, also used for centre of translations
let y = 0;

//poem
let poem; //variable for the poem text file
let lastLine = 0; //variable for last line of the poem that has been displayed
let thisLine = 0; //variable for next line of the poem to be displayed

//sunset movement
let sunPosA; //sun's position
let speedA; //suns speed

//night sky
let nightPos; //night sky's position
let speedB = -10; //night sky's speed


//moon
let moonPosA; //1st moon's position
let moonPosB; //2nd moon's position
let speedC = -5;


//orbits
let planetAx; //planet A's x position
let planetAy; //y position
let radius; //radius of planet A
let earthD; //earth's diameter
let angle = 0; //angle to be used in rotation transformations
let angleB = 0;
let angleC = 0;

//seed
let seedY; //seed's y position
let dirt; //dirt that seed will land in
let stalkx1; //1st x position stalk of plant
let stalkx2; //2nd x position stalk of plant
let stalky1; //1st y position stalk of plant
let stalky2; //2nd y position stalk of plant


let gradient; //Ombre Sunset Colors Wallpaper (n.d.)
let solar; //toppng (n.d.)

//sound
let mySound; //ZapSplat (n.d.)


function preload(){
  gradient = loadImage("grad.jpg"); //Ombre Sunset Colors Wallpaper (n.d.)
  solar = loadImage("sun.png")
  mySound = loadSound("nature.mp3"); //sound played through animation
}

function setup() {
  createCanvas(500,500); //canvas resolution
  angleMode(DEGREES); //when doing rotations the angle unit will be degrees

  mySound.play();

//sun, stars and moon
  sunPosA = y; //sun's initial y position is the top of the canvas
  speedA = width/200; //speed in relation to canvas resolution
  moonPosA = height; //moon's initial y position is the bottom of the canvas
  moonPosB = 0; //moon's initial x position is left of canvas
  nightPos = height/2; //the night sky rectangle takes up 1/2 the canvas


//planet
   planetAx = width*0.3; //planet A's x position
   planetAy = height*0.5; //planet's y position
   radius = width*0.02; //planet's radius
   earthD = width*0.08; //earth's diameter

//seedling
   seedY = -width; //starts off of the canvas before appearing from the right
   dirt = height; //starts off of the canvas before appearing from the bottom
    stalkx1 = width*0.14; //1st x position stalk of plant
    stalkx2 = stalkx1; //2nd x position stalk of plant is equal to stalk's 1st x position (then grows upwards)
    stalky1 = height*0.8; //1st y position stalk of plant
    stalky2 = stalky1; //2nd y position stalk of plant is equal to stalk's 1st y position (then grows upwards)
//leaf which will be an ellipse has dimensions of 0 before it starts to grow
    leafx = 0;
    leafy = 0;
//the poem's txt file
  poem = loadStrings("when_i_die_extract_rumi.txt"); //load poem from text file, text taken from All Poetry (n.d.)


}


function draw() { //start of draw function

  console.log(thisLine + "..." + frameCount ); //logs the line of the poem and the relevant frame number
  frameRate(25); //25 frames appear in a second

  image(gradient, 0,0, width, height);

//sound will stop after a certain number of frames
  if(frameCount >= 680){
    mySound.stop();
  }


//sun circle
  noStroke(); //no outline
  fill('white'); //white fill
  ellipse(width/2, sunPosA, width/4, height/4); //position + size

//sun movement
 if(frameCount < 130){ //if the frame count criteria is met, the following appears on the canvas:
   sunPosA = (sunPosA+speedA)%height; //sun moves down the canvas at speed A along the height of the canvas. Each frame variable increments (Di Donato, 2021)
 }

//rectangle for night sky and earth
  fill(65,54,135,255);//navy
  rect(0, height/2, width, height); //night sky/ ground fills 1/2 the canvas

  if(frameCount > 160){ //if the frame count criteria is met, draw the following
    fill(65,54,135,255);//navy
    rect(0,0, width, height); //night sky/ ground now fills the whole canvas.
    //Code has been positioned here so that sky appears behind the moon
  }


  if(frameCount >= 130  && frameCount< 240){ //if the frame count criteria is met, draw the following:

    fill(65,54,135,255);//navy
    rect(0, nightPos, width,height); //night sky rectangle
    nightPos = (nightPos+speedB)%height; //night sky moves up the canvas at speed B along the height of the canvas. Each frame variable increments (Di Donato, 2021)

    fill('white'); //white fill
    ellipse(width/2, moonPosA, width/4, height/4); //moon size + position
    moonPosA = (moonPosA+speedC)%height;  //moon moves up the canvas at speed C along the height of the canvas. Each frame variable increments (Di Donato, 2021)

    fill(65,54,135,255);//navy
    ellipse(moonPosB, moonPosA, width/4, height/4); //navy circle that starts at the left edge of the screen and has the same y position as the moon
    moonPosB = (moonPosB-speedC)%width;
    //blue circle moves across the canvas at -speed C (from left to right ) along the width of the canvas. Each frame variable decrements (Di Donato, 2021)
    //appears to be a moon phasing
  }

  if(frameCount > 240){ //if the frame count criteria is met draw the following:
    fill(0); //black canvas
    rect(0,0,width,height);
 }


//CRESCENTS ORBITING
  if(frameCount > 280){ //if the frame count criteria is met draw the following:

  fill(0); //black canvas
  rect(0,0,width,height);

  fill('orange'); //orange fill
  noStroke(); //no outline
  ellipse(width*0.5, height*0.5, width*0.15); //sun centred in the canvas
  image(solar, 0,0, width, height);


  stroke(255); //white outline to appear on next circles
  noFill(); //no fill on next circles

//local variables used within draw()
  var d = width*0.8; //diameter of largest circle
  var x = width*0.5; //x and y positions
  var y = height*0.5;

  var smallD = width*0.05; //diameter of small orbiting circles
  var smallX = smallD*2;  //x and y positions
  var smallY = smallD*2;  //x and y positions

/*rings is the initial value for the counter
as long as the number of rings is less than 3,
the code block is executed and rings increments by 1*/
  for (var rings = 0; rings<3; rings++){

      ellipse(x, y, d, d); //draw the circle
      d -= width*0.2; //after each iteration, the diameter decreases by 1/5 of the width of the canvas

     push(); //save previous drawing information before drawing the next shapes with new settings (p5j, n.d.; The Coding Train, 2017)
      fill('yellow'); //yellow fill
      noStroke(); //no outline
      translate(x, y); //make the center of rotation the centre of the canvas (0,0)
      rotate(angle); //rotate shape by predefined angle (0 degrees) (The Coding Train, 2017)
      ellipse(smallX, smallY, smallD); //draw circles
      angle -=  0.5; //add to the angle every frame
      //yellow moons will rotate around centre of canvas

      fill('black'); //black fill
      rotate(angleB);  //rotate shape by predefined angle (0 degrees) (The Coding Train, 2017)
      ellipse(smallX,smallY, smallD);  //draw circles
      angleB -= 0.01; //subtract from the angle every frame
      //black circles will rotate around centre of canvas in opposite direction to yellow moons
      //will appear to be orbiting crescents that are phasing

      smallX += 2.5*smallD; //after each iteration, the smallX value increases so that 3 circles appear in different positions

    pop(); //reset to original drawing information (p5j, n.d.; The Coding Train, 2017)

  } //end of for loop
}

//EARTH ORBITING
  fill('dodgerblue'); //blue fill
  strokeWeight(3); //stroke weight of 3 pixels
  stroke('green');

  push(); //save previous drawing information before drawing the next shapes with new settings (p5j, n.d.; The Coding Train, 2017)
    translate(x, y); //make the center of rotation the centre of the canvas
    rotate(angleC); //rotate shape by predefined angle (0) (The Coding Train, 2017)
    ellipse(0.56*x, smallY, earthD); //draw circle
    angleC = angleC + 0.5; //add to the angle every frame
  pop(); //reset to original drawing information (p5j, n.d.; The Coding Train, 2017)

if(frameCount > 400){  //if the frame count criteria is met draw the following:
  earthD += width*0.024; //'zoom in' to the earth, diameter increases every frame
}

if(frameCount > 460 && dirt !==height*0.7){ // if frame criteria is met AND the dirt is below 7/10 of the canvas, draw the following:
  noStroke(); //no outline
  fill(65,54,135,255); //navy
  rect(0, dirt, width,height); //draw dirt rectangle
  dirt += speedB; //dirt moves up the canvas at speed B along the height of the canvas. Each frame variable increments
}

if(dirt == height*0.7){ //once at a certain height, the dirt is drawn in a fixed position
  noStroke(); //no outline
  fill(65,54,135,255);//navy
  rect(0,height*0.7,width,height); //draw rectangle
}

if(frameCount>460 && seedY <= height*0.4){ // if frame criteria is met AND the seed has not yet reached a certain position
  //SEED FALLING
  fill('black');
  noStroke();
  push(); //save previous drawing information before drawing the next shapes with new settings (p5j, n.d.; The Coding Train, 2017)
    rotate(50); //rotate shape by angle (The Coding Train, 2017)
    ellipse(width*0.7, seedY, width*0.01, height*0.03);
    seedY = seedY + height*0.0375;
  pop(); //reset to original drawing information (p5j, n.d.; The Coding Train, 2017)
}

if(seedY >= height*0.4){ //once at a certain height, the seed is drawn in a fixed position
  fill('white');
  noStroke();
  push(); //save previous drawing information before drawing the next shapes with new settings (p5j, n.d.; The Coding Train, 2017)
    rotate(50); //rotate shape by angle (The Coding Train, 2017)
    ellipse(width*0.7, height*0.4, width*0.01, height*0.03);
  pop(); //reset to original drawing information (p5j, n.d.; The Coding Train, 2017)

}


  if(frameCount>500 && frameCount <550){ //if frame criteria is met , draw the following:
    stroke(255); //black stroke
    line(stalkx1, stalky1, stalkx2, stalky2); //line drawn using predefined variables
    stalky2 -= width/300; //variable decrements and so the second y coordinate moves up the screen
  }


  if(frameCount>=510){ //if frame criteria is met, draw the following:
    stroke('white'); //white outline
    line(stalkx1, stalky1, stalkx2, stalky2); //stalk drawn in fixed position

    fill('green'); //green fill, no outline
    noStroke();

/*i variable is initalised at 0, as long as i is less than 50,
execute the code block and increment i*/
    for(i=0; i<50; i++){
    fill('lightgreen');
    ellipse(random(stalkx2-10, stalkx2+10), random(stalky2, stalky2+20), width*0.01); //circles drawn in random positions around the stalk

    fill('green');
    ellipse(random(stalkx2-10, stalkx2+10), random(stalky2, stalky2+20), width*0.01); //circles drawn in random positions around the stalk

    fill('turquoise');
    ellipse(random(stalkx2-10, stalkx2+10), random(stalky2, stalky2+10), random(leafx), random(leafy)); //circles drawn in random positions around the stalk with random dimensions (that will increase)

  }

  //leaves' dimensions increment every frame
   leafx += 0.1;
   leafy += 0.2;

  }



//grain effect (ag3439, 2017; The Coding Train, 2015)
    fill(255); //white fill
    noStroke(); //no outline

     var grain = { //grain construction
       grainPosX : random(width), // grainPosX is a property that has a random value from 0 to the width value of the canvas, it will be the x position of the grain
       grainPosY : random(height), // grainPosY is a property that has a random value from 0 to the height value of the canvas, it will be the y position of the grain
       grainSize : random(width/300,width/200) //grainSize will be the size of the grain
     }

 /*i variable is initalised at 0, as long as i is less than 5,
 execute the code block and increment i*/
for(i = 0; i<5; i++){
    ellipse(grain.grainPosX ,grain.grainPosY, grain.grainSize); //grain (which are little circles) are drawn with  properties from grain constructor
    //every iteration, the properties have random values re-assigned
    grain.grainPosX = random(width);
    grain.grainPosY = random(width);
    grain.grainSize = random(width/300,width/200);

}

// TEXT
      textSize(width*0.03); //text size
      textStyle(BOLDITALIC); //emboldened and italicised
      stroke(0); //black outline
      fill(255, 204, 0); //yellow colour

/*read is a variable holding text extracted from the poem text file
 the current line of the poem is drawn to the canvas using two variables holding the
 last line shown and the next line to be shown as the start and end values*/

 //Poem from txt file (Di Donato, 2021)
      let read = poem.slice([lastLine],[thisLine]);

      if(frameCount%40 == 0){ //after a certain amount of time, the lines of the poem change
        lastLine= thisLine; //make the last line the line that has just been displayed
        thisLine = thisLine + 1; //move to the next line
      }

    text(read, width*0.32, height*0.9); //draw the text over everything

    if(frameCount >= 680){ //at the end if the poem
      fill(255); //white fill
      noStroke()
      rect(0, 0, width,height); //draw rectangle

//CREDITS
    textSize(width*0.05); //text size
    stroke(0); //black outline
    fill(255, 204, 0); //yellow colour
    text('Rumi', width*0.45, height*0.5);

    textSize(width*0.03)
    fill(0);
    noStroke();
    text('"When I Die"', width*0.42, height*0.6);
  }

} //end of draw function
