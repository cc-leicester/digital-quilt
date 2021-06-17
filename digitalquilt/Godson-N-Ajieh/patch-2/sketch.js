/*

"Simplicity is the final achievement" - Chopin

Author: Godson Ajieh
Work :   Generative Poetic Machines
Title: Game to Infinity

Aim: To show that words are not just 'words' and that they carry meanings with an invisible electromagnetic force as we speak them into existence or even concieve them in our minds

Objective: To display a poem in a visual way to give the reader a emmersive feeling and also to personify the words or many other inanimate objects into machines.

//Inspired by George Orwell's 1984

When you move the page and read at the same time it appears as if the words are not even moving.
*/

let grotesk; //declaring the grotesk variable
let fontSize = 78; //declaring the fontsize vairable
let TitleArray; //declaring the TitleArray variable

//variable for each line of poem
let Line1;
let Line2;
let Line3;
let Line4;
let Line5;

//variable for the rotation of the words
let r = 0;

//preload function loads the font needed for the words
function preload() { 

  //loading font for the text
  //grotesk = loadFont('Arizonia-Regular.ttf')
  grotesk = loadFont('grotesk.otf'); //loading font which was downloaded from fontspace
}


function setup() {
  createCanvas(500, 500); //this was 1100 and 1100
  textFont(grotesk); //giving the textfont the data from the font 
  textSize(fontSize);

  //holding array of points for texttopoint
  TitleArray = grotesk.textToPoints("Chilling in my", 10, 100, fontSize, {
    sampleFactor: 0.058393
  }); //text to points holds an array of the points in the text 0.0875

  Line1 = grotesk.textToPoints("room,", 10, 200, fontSize, {
    sampleFactor: 0.073
  }); //("text, x , y, 78, how many point on the text") 

  Line2 = grotesk.textToPoints("My mum said", 10, 300, fontSize, {
    sampleFactor: 0.073
  });
  
   Line3 = grotesk.textToPoints("do work.", 10, 400, fontSize, {
    sampleFactor: 0.073
  });
  
   Line4 = grotesk.textToPoints("but I hate", 10, 500, fontSize, {
    sampleFactor: 0.073
  });
  
   Line5 = grotesk.textToPoints("the broom ", 10, 600, fontSize, {
    sampleFactor: 0.073
  });
  
/*
  print(TitleArray);
  print(Line1);
  print(Line2);
  print(Line3);
  print(Line4);
  print(Line5);
 */
  
}

//this function runs the pixel multiple times on the canvas
function draw() {
  background(10, 100, 150);
  // text("i could potentially write a poem  here!", 15, 90)

  for (let i = 0; i < TitleArray.length; i++) {
    //this gives access into all objects in the for loop

    //push and pop returns the shape to the original coordinate system
    push();
    translate(TitleArray[i].x, TitleArray[i].y); //this returns the text into the original shape when the transformation is reset

    rotate(r);
    r++; //after translate rotate the empty r variable
    strokeWeight(10); //the thickness of the line
    line(-4, -6, 6, 6); //this was -5,-5,5,5
    pop();
  }

  for (let i = 0; i < Line1.length; i++) {
    push();
    translate(Line1[i].x, Line1[i].y);

    rotate(r);
    r++;
    strokeWeight(10);
    line(-5, -5, 4, 4); //this adds a line on the x,y axis and width and height of the text 
    pop();
  }
  
  for (let i = 0; i < Line2.length; i++) {
    push();
    translate(Line2[i].x, Line2[i].y);

    rotate(r);
    r++;
    strokeWeight(10); //this changes the thickness of the text
    line(-5, -5, 1, 1);
    pop();
  }
  
  for (let i = 0; i < Line3.length; i++) {
    push();
    translate(Line3[i].x, Line3[i].y);

    rotate(r);
    r++;
    strokeWeight(8);
    line(-5, -5, 1, 1);//-3 -3 1 1 
    pop();
  }
  
  for (let i = 0; i < Line4.length; i++) {
    push();
    translate(Line4[i].x, Line4[i].y);

    rotate(r);
    r++; //this iterates the rotation of the shape inside the loop of the text
    strokeWeight(10);
    line(-2, -6, 5, 4); //-2 -6 5 4
    pop();
  }
  
  for (let i = 0; i < Line5.length; i++) {
    push();
    translate(Line5[i].x, Line5[i].y);

    rotate(r);
    r++;
    strokeWeight(10);
    line(-6, -2, 5, 6);
    pop();
  }
   

}
