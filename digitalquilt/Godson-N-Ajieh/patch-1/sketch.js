/*
Author: Godson Ajieh
Work: Brushed Mandelbrot Set 

Inspired by the mandebrot set I decided to program it using p5.js and run a pixelised version of the portable graphics format image, the result is a brushed version of the Mandelbrot Set and shows the true beauty of complex numbers and the shape it forms when real and imaginary numbers are combined.

Reference:
Daniel Shiffman, (2017) Mandelbrot Set with p5.js [Online]. Available at: https://thecodingtrain.com/CodingChallenges/021-mandelbrot-p5.html (Accessed: 16 May 2021)
*/

let img; //global image variable
let cnv;

function preload(){
  //img = loadImage('assets/Varrick_biotech.png'); 
  img = loadImage('assets/mandelbrot.png'); //including the file path for the image
  
}


//this setuupfunction is only drawn once
function setup() {
 cnv = createCanvas(550, 550);
 //background('black');

  //cnv = createCanvas(img.width, img.height); //changing the canvas size to the image size 
  
 // print(img.width, img.height) 
//the image dimensions - widht is 768 and height is 1024
  
  let newCanvasX = (windowWidth - img.width)/2; //this is the x position of the canvas
  
  let newCanvasY = (windowHeight - img.height)/2; //this is the y position of the canvas
  cnv.position(newCanvasX, newCanvasY);

  //accessing each position of the pixels in the image
  for(let col = 0; col < img.width; col+=10){ //nested for loops for the each column 
    for(let row = 0; row < img.height; row+=10){ //accessing the rows of the pixel in each column
      let xPos = col; //setting the x position variable to the column
      
      let yPos = row; 
      
      let c = img.get(xPos, yPos); //this can access the color information of the image pixel
      
      push();

      noFill(); //this does not fill the points on the image
      
      
      fill(color(c)); //setting the color to draw lines around the shape
      
      
      strokeWeight(random(3)); //giving the weight a random thickness to each curve 
      
      stroke(color(c));
      point(col, row); //drawing each position of the pixels
      
      rect(col,row,10,5); //x,y, width and height
      
      pop();
    }
   }
  
}
