//Where is the help? , Farah Razak_209027586_Digital Arts_CO1110_Portfolio_Patch2
// Year 2021

// This is the second piece of my project, a generative visual work. This work represents the country, Palestine, whom is struggling, suffering and dying in current event or we can call it a 'war' betwen Israel today. I have created the Palestine's flag by coding it on P5.js (Atom software). The flag is being overshadowed by distorted words - portraying the sobbing of victims in Palestine who have lost their homes, families and dreams. I named this work "Where is the help", refering to them not getting help from International criminal law or other countries. This horrific genocide has been happening for years, the victims even started recording the the event live, to show people around the world of what is happening in Palestine. We as ordinary people, unfortunately could not make a change apart from raising awareness and donation, as we are relying on the goverments which they should have acted earlier.
//I have chosen dark blood red as the bankground html page as that represents the blood of the victims.

//References:
//P5js.org. n.d. examples | p5.js. [online] Available at: <https://p5js.org/examples/typography-words.html>.




//setting up the canvas to size 720,720
function setup() {
  createCanvas(500,500);
  background(0, 0, 0); //making the background of the canvas black


  //Set text characteristics
  textSize(20); //setting the text size to size 20
  text('Helvetica',20); //making the font Helvetica
  textAlign(LEFT, LEFT); //setting the text position to left
}

function draw(){

//drawing palestine's flag
//black line
	fill(0,0,0);
	noStroke();
	rect(0,50,550,25);


	 //white lines
	fill(255, 255, 255);
	noStroke();
	rect(0,200,550,25);

	fill(255,255,255);
	noStroke();
	rect(0,150,550,25);

	fill(255, 255, 255);
	noStroke();
	rect(0,150,550,25);

	fill(255,255,255);
	noStroke();
	rect(0,175,550,25);

	fill(255,255, 255);
	noStroke();
	rect(0,200,550,25);


  //green lines
	fill(14, 113, 0);
	noStroke();
	rect(0,225,550,25);

	fill(14, 113, 0);
	noStroke();
	rect(0,250,550,25);

	fill(14, 113, 0);
	noStroke();
	rect(0,275,550,25);

	fill(14, 113, 0);
	noStroke();
	rect(0,300,550,25);

	fill(14, 113, 0);
	noStroke();
	rect(0,325,550,25);


  //red triangle
	fill(228, 2, 0);
	noStroke();
	triangle(0,0,220,175,0,325,25);


//arranging texts where they would appear
  textAlign(RIGHT);
    drawWords(width * 0.20);
    drawWords(width * 0.40);


    //Align the text in the center
      // and run drawWords() in the middle of the canvas
      textAlign(CENTER);
      drawWords(width * 0.40);

      textAlign(CENTER);
      drawWords(width * 0.60);

      textAlign(CENTER);
      drawWords(width * 0.70);


      // Align the text to the left
      // and run drawWords() in the right third of the canvas
      textAlign(LEFT);
      drawWords(width * 0.80);

      textAlign(LEFT);
      drawWords(width * 0.90);

}



function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position


  fill(228, 2, 0); //setting the color of the font
  text('this is genocide', x, 50); //(text,horizontal axis, positiony)

  fill(228, 2, 0); //setting the color of the font
  text('people are murdered everyday', x, 100);//(text,horizontal axis, positiony)

  fill(255); //setting the color of the font
  text('no one is sending help', x, 150);//(text,horizontal axis, positiony)


  fill(228, 2, 0);//setting the color of the font
  text('my family died', x, 200);//(text,horizontal axis, positiony)

  fill(65);//setting the color of the font
  text('we are just being watched', x, 250);//(text,horizontal axis, positiony)

  fill(190);//setting the color of the font
  text('I want to go to school', x, 300);//(text,horizontal axis, positiony)

  fill(120);//setting the color of the font
  text('we celebrate eid by seeing deaths everyday', x, 350);//(text,horizontal axis, positiony)

  fill(255);//setting the color of the font
  text('we celebrate eid by seeing deaths everyday', x, 380);//(text,horizontal axis, positiony)


  fill(255);//setting the color of the font
  text('this is not a conflict', x, 400);//(text,horizontal axis, positiony)

  fill(14, 113, 0); //setting the color of the font
  text('this is war', x, 450);//(text,horizontal axis, positiony)

  fill(255);//setting the color of the font
  text('this is war', x, 480);//(text,horizontal axis, positiony)


  fill(228, 2, 0);//setting the color of the font
  text('we are dying', x, 500);//(text,horizontal axis, positiony)

  fill(228, 2, 0);
  text('we are dying', x, 600);//(text,horizontal axis, positiony)


  fill(255);//setting the color of the font
  text('zionists', x, 550);//(text,horizontal axis, positiony)

  fill(14, 113, 0);
  text('they are zionists', x, 700);//(text,horizontal axis, positiony)



  fill(0);//setting the color of the font
  text('free', x, 160);//(text,horizontal axis, positiony)

  fill(65);//setting the color of the font
  text('palestine', x, 180);//(text,horizontal axis, positiony)

  fill(14, 113, 0);//setting the color of the font
  text('free', x, 200);//(text,horizontal axis, positiony)

  fill(14, 113, 0);
  text('palestine', x, 220);//(text,horizontal axis, positiony)



  fill(0);//setting the color of the font
  text('free', x, 240);//(text,horizontal axis, positiony)

  fill(65);//setting the color of the font
  text('we cant go to school', x, 260);//(text,horizontal axis, positiony)


  fill(14, 113, 0);//setting the color of the font
  text('palestine', x, 300);//(text,horizontal axis, positiony)



  fill(14, 113, 0);//setting the color of the font
  text('we want to live', x, 280);//(text,horizontal axis, positiony)

  fill(14, 113, 0);//setting the color of the font
  text('free palestine', x, 300);//(text,horizontal axis, positiony)//(text,horizontal axis, positiony)



  fill(255);//setting the color of the font
  text('stop killing innocent people', x, 550);//(text,horizontal axis, positiony)

  fill(255);//setting the color of the font
  text('this is ethnic cleansing', x, 300);//(text,horizontal axis, positiony)

  fill(14, 113, 0);//setting the color of the font
  text('this is ethnic cleansing', x, 600);//(text,horizontal axis, positiony)

  fill(255);//setting the color of the font
  text('this is ethnic cleansing', x, 650);//(text,horizontal axis, positiony)

  fill(255);//setting the color of the font
  text('stop killing innocent people', x, 700);//(text,horizontal axis, positiony)

}




//fill(44,33,110);
//triangle(-120, 330, 160, -120, 430, 320);

//fill(145, 0, 0);
//triangle(-100, 350, 180, -100, 450, 340);

//fill(66,66,10);
//triangle(-80, 370, 200, -80, 470, 360);

//fill(145, 0, 0);
//triangle(-60, 390, 220, -60, 490, 380);

//fill(0,0,10);
//triangle(-40, 410, 240, -40, 510, 400);

//fill(145, 0, 0);
//triangle(-20, 430, 260, -20, 530, 420);

//fill(5,20,120);
//triangle(0, 450, 280, 0, 550, 440);

//fill(145, 0, 0);
//triangle(20, 470, 300, 20, 570, 460);

//fill(255,204,0);
//triangle(40, 490, 320, 40, 590, 480);

////fill(145, 0, 0);
//triangle(60, 510, 340, 60, 610, 500);


//fill(242, 6, 0);
//triangle(80, 530, 360, 80, 630, 520);

//fill(0, 0, 0);
//triangle(100, 550, 380, 100, 650, 540);

//fill(255,255,255);
//triangle(120, 570, 400, 120, 670, 560);

//fill(14, 113, 0);
//triangle(140, 590, 420, 140, 690, 580);

//fill(30,40,50);
//triangle(160, 610, 440, 160, 720, 610);

//fill(145, 0, 0);
//triangle(180, 630, 460, 180, 740, 630);

//fill(44,44,44);
//triangle(200, 650, 480, 200, 760, 650);


//fill(145, 0, 0);
//triangle(220, 670, 500, 220, 780, 670);

//fill(66,66,66);
//triangle(240, 690, 520, 240, 800, 690);

//fill(145, 0, 0);
//triangle(260, 710, 540, 260, 790, 710);

//fill(88,88,88);
//triangle(280, 730, 560, 280, 810, 730);



//fill(145, 0, 0);
//triangle(300, 750, 580, 300, 830, 750);

//fill(130,130,130);
//triangle(320, 770, 600, 320, 850, 770);

//fill(145, 0, 0);
//triangle(340, 790, 620, 340, 850, 790);

//fill(110,155,123);
//triangle(360, 810, 640, 360, 850, 810);



//fill(145, 0, 0);
//triangle(380, 840, 660, 380, 850, 830);

//fill(110,155,123);
//////triangle(400, 860, 680, 400, 870, 850);

////fill(145, 0, 0);
//triangle(420, 880, 700, 420, 890, 870);;

//fill(110,155,123);
//triangle(440, 900, 720, 440, 910, 890);

//fill(145, 0, 0);
//triangle(460, 920, 740, 460, 930, 910);

//fill(0,0,0);
//triangle(480, 940, 760, 480, 950, 930);

//fill(145,0,0);
//triangle(500, 960, 780, 500, 970, 950);



//rect

//fill(99,99,99);
//rect(100, 550, 380, 100);

//fill(200,29,99);
//rect(150, 500, 380, 100);

//fill(150,229,49);
//rect(200, 450, 380, 100);

//fill(50,29,209);
//rect(250, 400, 380, 100);

//fill(150,229,49);
//rect(200, 350, 380, 100);

//fill(130,29,59);
//rect(150, 300, 380, 100);

//fill(180,89,79);
//rect(100, 250, 380, 100);

//fill(150,229,49);
//rect(50, 200, 380, 100);
