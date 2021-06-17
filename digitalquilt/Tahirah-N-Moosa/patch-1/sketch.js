// The user has 5 seconds to enter the correct combination of keys as shown at the top of the screen.
// Use the numpad keys 1, 2 and 3.
// Sound is used

//References

/*chjno (2017) continuous scrolling background image. Available at: https://editor.p5js.org/chjno/sketches/ByZlypKWM (Accessed: 19 May 2021)

CodeMan38 (n.d) PressStart2P-Regular. Available at: https://fonts.google.com/specimen/Press+Start+2P?query=CodeMan38&preview.text_type=custom&selection.family=Press+Start+2P (Downloaded: 16 ‎February ‎2021).

Der Wein-Bischoff (2019) Celebrate Happy New Year Sticker. Available at: https://giphy.com/stickers/derweinbischoff-celebrate-confetti-dwb-gKrbnqo25MlI2TUC78 (Downloaded: 15 ‎February ‎2021).

Di Donato, B. (2021) ‘Digital Quilting’ [Workshop Group BDD Year 1], CO1110: Digital Arts Lab. University of Leicester, 16 February.

Nitti, V. (2017) Glacial Mountains: Parallax Background. Available at: https://vnitti.itch.io/glacial-mountains-parallax-background (Downloaded: 1 March ‎2021).

rvros (2018) Animated Pixel Adventurer. Available at: https://rvros.itch.io/animated-pixel-hero (Downloaded: 2 ‎February ‎2021).

Tice, W. (2018) Five Free Pixel Explosions. Available at: https://untiedgames.itch.io/five-free-pixel-explosions (Downloaded: 16 ‎February ‎2021).

ZapSplat (n.d.) Sound effects available at: https://www.zapsplat.com/ (Accessed: 19 May 2021)

Zuno, L. (2015) Country Side Platfrom Tiles. Available at: https://opengameart.org/content/country-side-platform-tiles (Downloaded: 30 January ‎2021).

Zuno, L. (2016) Magic Cliffs Environment. Available at: https://ansimuz.itch.io/magic-cliffs-environment (Downloaded: 13 ‎February ‎2021).
*/

let x = 0; //for character's horizontal (x) position
let y; //for vertical (y) position of character

let offset = 0; //for background's starting point before moving
let offsetB; //second background image's starting point, will be the width of the canvas
let offsetC = 0; //for middleground starting point before moving
let offsetD; //second middleground image's starting point, will be the width of the canvas
let speedA = 0.2; //speed of background's movement
let speedB = 1; //speed of middleground's movement, will be faster than background

let bg; //background image
let mg; //middleground image
let heroIDLE; //the hero standing still
let platform; //platform image
let poof; //explosion gif
let confetti; //confetti celebration gif

let soundKey; //sound effect when keys are pressed correctly
let success; //win sound effect
let fail; //lose sound effect

let randomSequence = []; //array where the random sequence of numbers for the user to type will be stored
let userInput = []; //array where the user's answers will be stored
let result = []; //array where whether the user's answer is right or wrong will be stored

//random sequence generation (Di Donato,2021)
let aNumber = 1; //starting number for generating random sequence
let limit = 3; //limit for the random sequence

let restartButton; //button to restart the game
let timer = 10; //game timer, first 5 seconds instructions are shown, second 5 seconds the player plays

function preload(){ //variables within here are loaded before the draw function

  //character
  heroIDLE = loadImage("images/IDLE.gif"); //rvros (2018)

  //background
  bg = loadImage("images/country_platform_back.png"); //Zuno (2015)
  mg = loadImage("images/clouds_mg_1.png"); //Nitti (2017)
  platform = loadImage("images/cliff2.png"); //Zuno (2015)
  confetti = loadImage("images/successConfetti.gif"); //Der Wein-Bischoff (2019)
  poof = loadImage("images/poof.gif"); //Tice (2018)

  //font
  myFont = loadFont("fonts/PressStart2P-Regular.ttf"); //CodeMan38 (n.d)

//sound effects obtained from Zapsplat.com
  soundKey = loadSound("Sounds/keypress.mp3"); //sound when key is pressed
  success = loadSound("Sounds/success.mp3"); //game won sound effect
  fail = loadSound("Sounds/fail.mp3"); //game over sound effect


}


function instructions(){ // instructions drawn on the screen explaining how to play
  //white rectangle
  fill(255);
  rect(width*0.02,  height*0.3, width*0.95, height*0.4);
  // text
  fill(0); //black colour
  textSize(width*0.04); //text size
  textFont("Verdana"); //text font
  text("Press the correct keys using the numpad", width*0.1, height*0.45); //text to appear and positioning

}




function setup() {
  frameRate(20); //frame rate of 20 frames per second
  createCanvas(500, 500); //canvas of frame resolution 500 pixels

//now that width has been defined, can set the value of the secondary offsets
  offsetB = width;
  offsetD = width;

//vertical position of the character set using height variable
  y = height*0.1;


  myRandomfunction(); //runs the random sequence generator

  //formatting of the button to restart the game
  restartButton = createButton('RESTART');
  restartButton.mousePressed(restart); //runs the restart() function
  restartButton.position(-width); //initially off the screen
  restartButton.style("font-family","Verdana");
  restartButton.size(width*0.2,height*0.1);
  restartButton.style("background-color","lightgreen");
  restartButton.style("border-radius","5px");

} //end of setup

//random number generator (Di Donato,2021)
function myRandomfunction(){
  for(i = 0; i < limit; i++){ //while i is less than the limit (3), execute the following and increment i by 1 after each loop:
    let newNumber = round(random(1,3)); //random whole number from 1 to 3
      if(newNumber !== aNumber){ //if the new random number is = to the starting number (1), execute the following:
        aNumber = newNumber; //set aNumber to be the new number
        randomSequence.push(aNumber); //add the random to the random sequence array
      } else{ //if the old number = the new number, increase the limit by one so that there are 3 numbers in the array
        limit +=1;
      }
    }
} //end of random function

function keyPressed(){ //function runs when keys are pressed.
  if(userInput.length <= 3){ //if the user input array is less than or equal to 3, execute the following:
    userInput.push(int(key)); //add the key the user pressed to the user input array
    console.log(userInput); //print to the console what they pressed
  }

for(i = 0;  userInput.length == 3 && i < randomSequence.length; i++){ //the loop will run only when there are 3 items in the user input array, otherwise the 'else' code will be executed even if the user hasn't entered anything yet
  if(randomSequence[i] == userInput[i]){ //if the random number matches the user number then:
      print("correct"); //print correct to the console and push it to the result array
      result.push("correct");
  }
  else {
    print("wrong"); //print wrong to the console and push it to the result array
    result.push("wrong");
    }

}

soundKey.play(); //for every key press, play this sound

}



function draw(){

  /*timer: if the value of the timer (initially 10) is greater than 0 AND the frame count is divisible by 20, take away 1 from the timer. Every second 20 frames pass.
  Nothing will be taken away once the timer is at 0*/
      if(timer>0 && frameCount%20 == 0 ){
        timer--;
      }

  //background movement inspired by chjno (2017)
      offset -= speedA; //offset which is initially 0 has 0.2 (the speed) removed from it each time the draw function runs, causing the x position of the bg image to move
      offsetB -= speedA; //offsetB starts at the RHS of the canvas and also has 0.2 subtracted, causing the x position of the 2nd bg image to move

      offsetC -= speedB; //offsetC which is initially 0 has 1 removed from it each time the draw function runs, causing the x position of the mg image to move
      offsetD -= speedB; //offsetD starts at the RHS of the canvas and also has 1 subtracted, causing the x position of the 2nd mg image to move

      //background images
      image(bg, offset,0, width, height); //2 background images, first one starts at left of canvas, second one starts at right of canvas
      image(bg, offsetB,0, width, height);

      //middleground images
      image(mg, offsetC, 0, width, height); //2 middleground images, first one starts at left of canvas, second one starts at right of canvas
      image(mg, offsetD, 0, width, height);



      if ( offset <-width ){
        offset = width; //when the offset (0) is less than the width of the canvas, the offset takes the width value, so the 1st bg is queued behind the 2nd bg image which is moving
      }
      if (offsetB < -width){ //when  offsetB is less than the negative of the width, offset takes the width value, so the 2nd bg is queued behind the 1st bg image which is moving
        offsetB = width;
      }
      if (offsetC < -width){ //when  offsetC is less than the width of the canvas, offset takes the width value, so the 1st mg is queued behind the 2nd mg image which is moving
        offsetC = width;
      }
      if (offsetD < -width){  //when  offsetD is less than the negative of the width, offset takes the width value, so the 2nd mg is queued behind the 1st mg image which is moving
        offsetD = width;
      }

/////////////////////////////////////////////////////////////

//x positions for the platforms
      p1X = width*0.02;
      p2X = width*0.2;
      p3X = width*0.4;
      p4X = width*0.6;
      p5X = width*0.8;

//y positions for the platforms
      p1Y = height*0.27;
      p2Y = height*0.5;
      p3Y = height*0.8;
      p4Y = height*0.6;
      p5Y = width*0.27;

//width and height of the platform
      pwidth = width*0.2;
      pheight = height*0.2;

//these variables are for the y position of the character on the relevant platforms
      var top2 = p2Y - (width*0.15);
      var top3 = p3Y - (width*0.15);
      var top4 = p4Y - (width*0.15);
      var top5 = p5Y - (width*0.15);


       if ((keyIsDown(97)||keyIsDown(98)||keyIsDown(99)) && x==0 ){ //if any of these keys (1, 2 or 3 on the numpad) is pressed, and the character is on the first platform (x=0), execute the following:
         image(bg, offset,0,width,height);  //redraw backgrounds
         image(bg, offsetB,0,width,height);
         image(mg, offsetC,0,width,height);
         image(mg, offsetD,0,width,height);

         x = p2X; //move the character to the next platform
         y = top2; //position the character on top of the next platform
         image(heroIDLE, x,y, width*0.2, height*0.2); //draw the character
       }

     else if ((keyIsDown(97)||keyIsDown(98)||keyIsDown(99)) && x==p2X ){ //if any of these keys (1, 2 or 3 on the numpad) is pressed, and the character is on the second platform, execute the following:
         image(bg, offset,0,width,height);  //redraw backgrounds
         image(bg, offsetB,0,width,height);
         image(mg, offsetC,0,width,height);
         image(mg, offsetD,0,width,height);

         x = p3X; //move the character to the next platform
         y = top3; //position the character on top of the next platform
         image(heroIDLE, x,y, width*0.2, height*0.2); //draw the character
       }

     else if ((keyIsDown(97)||keyIsDown(98)||keyIsDown(99)) && x==p3X ){ //if any of these keys (1, 2 or 3 on the numpad) is pressed, and the character is on the third platform, execute the following:
            image(bg, offset,0,width,height);  //redraw backgrounds
            image(bg, offsetB,0,width,height);
            image(mg, offsetC,0,width,height);
            image(mg, offsetD,0,width,height);

            x = p4X; //move the character to the next platform
            y = top4; //position the character on top of next platform
            image(heroIDLE, x,y, width*0.2, height*0.2); //draw the character
        }

        //platforms drawn on top of the background
       image(platform, p1X, p1Y, pwidth, pheight);
       image(platform, p2X, p2Y, pwidth, pheight);
       image(platform, p3X, p3Y, pwidth, pheight);
       image(platform, p4X, p4Y, pwidth, pheight);
       image(platform, p5X, p5Y, pwidth, pheight);

       //character drawn on top of the background and platforms
       image(heroIDLE,x, y, width*0.2, height*0.2);

       //timer text and random numbers
       if(timer<= 5){
          fill(255); //white text
          text(timer, width*0.1, height*0.1);//timer only shows after instructions disappear
          fill(0); //black text
          textSize(width*0.05); //text size
          textFont(myFont); //text font
          text(randomSequence, width*0.4, height*0.1); //random sequence shown to user
       }


       //win the game
      if(result[0] == "correct" && result[1] == "correct" && result[2] == "correct"){ //if the user gets all the answers correct (the keys they entered match the generated numbers) then execute the following:
        image(bg, offset,0,width,height);  //redraw backgrounds
        image(bg, offsetB,0,width,height);
        image(mg, offsetC,0,width,height);
        image(mg, offsetD,0,width,height);

        //explosions drawn in place of first 4 platforms
        image(poof, p1X, p1Y);
        image(poof, p2X, p2Y);
        image(poof, p3X, p3Y);
        image(poof, p4X, p4Y);

        //last platform remains
        image(platform, p5X, p5Y, pwidth, pheight);
        x = p5X; //move the character to the last platform
        y = top5; //position the character on top of the platform
        image(heroIDLE, x,y, width*0.2, height*0.2); //draw the character
        image(confetti, -width*0.1, 0, width, height); //draw confetti

        restartButton.position(width*0.40, height*0.6); //restart button which was initially off the canvas now moves to the centre

      }

      //lose the game
      else  if(timer ==0|| result[0] == "wrong" || result[1] == "wrong" || result[2] == "wrong"){ //if time runs out OR any one of the user's answers are wrong then execute the following:


        image(bg, offset,0,width,height);  //redraw backgrounds
        image(bg, offsetB,0,width,height);
        image(mg, offsetC,0,width,height);
        image(mg, offsetD,0,width,height);



        for(y ; y < height; y++){ //character falls off cliff (y position increased every frame)
          image(heroIDLE, x,y, width*0.2, height*0.2);
        }

        frameRate(10); //slower frame rate for explosions

        image(poof, p1X, p1Y);
        image(poof, p2X, p2Y);
        image(poof, p3X, p3Y);
        image(poof, p4X, p4Y);

        //last platform remains
        image(platform, p5X, p5Y, pwidth);

        //semi transparent red rectangle fills the screen
        fill(255,0,0,100);
        rect(0,0, width, height);

        //game over text
        fill(255); //white
        textSize(width*0.08); //size
        textFont(myFont); //font style
        text("Game Over", width*0.15, height/2); //text and positioning
        restartButton.position(width*0.40, height*0.6); //restart button which was initially off the canvas now moves to the centre

      }

      //countdown that appears with instructions
      if(frameCount<=100){
        instructions(); //run instructions function
        textSize(width*0.05); //size
        fill(255,0,0); //red
        textFont(myFont); //font style
        text("Starting in:"+(timer-5), width*0.15, height*0.6);//countdown takes timer value and subtracts 5 because user has 5 seconds to read instructions and 5 seconds to play
      }


} //end of draw function




function keyReleased(){ //runs when the key is released

  if(result[0] == "correct" && result[1] == "correct" && result[2] == "correct"){ //if the user gets all the answers correct (the keys they entered match the generated numbers) then execute the following:
    success.play(); //play the success sound
    print("Success sound should be playing"); //print text to console
  }
  else if(result[0] == "wrong" || result[1] == "wrong" || result[2] == "wrong"){  //if any one of the user's answers are wrong then execute the following:
    fail.play(); //play the fail sound
    print("fail sound should be playing"); //print text to console
  }
} //end of function


function restart(){ //runs when restart button is run
  x = 0; //reset the character's x position to 0
  y = height*0.1; //reset the character's y position

  randomSequence = []; //empty the random number array so new numbers can be generated
  limit = 3; //reset the limit for the array to 3
  userInput = []; //clear the entries the user made
  result = []; //clear the results
  frameCount = 0; //reset the frame count to 0
  timer = 10; //reset the timer

  myRandomfunction(); //rerun the random function for new numbers to be generated
  restartButton.position(-width); //move restart button off the screen
  confetti = loadImage("images/successConfetti.gif"); //reload the confetti and poof gifs as they are not looping gifs
  poof = loadImage("images/poof.gif");

  }  //end of function
