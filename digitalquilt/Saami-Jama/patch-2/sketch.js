
var circlex = 0; 



function setup() {
  createCanvas(500, 500)    // canvas creation
}

// planets
function planets() {
   
  fill(100, 150, 9);
  ellipse(50, 250, 350, 350);



  fill(50, 150, 150)
  ellipse(100, 250, 25, 25)



  fill(95)                            // mini planets around 
  ellipse(35, 20, 25, 25)

  fill(175)
  ellipse(400, 50, 25, 25)


  fill(145, 9, 17)
  ellipse(450, 250, 25, 25)

  // Mars
  fill(145, 9, 17)
  ellipse(500, 250, 150, 150)
}



function draw() {
  planets();

  let x = random(width);
  let y = random(height);


  let r = random(0);
  let g = random(50);
  let b = random(100);

  background(r, g, b, 25);

  // stars
  noStroke();
  fill(2, 200, 0);            // stars flickering 
  ellipse(x, y, 5, 5);


  fill(250, 250, 0);
  stroke(250, 250, 250);
  ellipse(mouseX, mouseY, 10, 5);

  fill(mouseX, 200, 150, 200); 
  ellipse(circlex, mouseY, 15, 25);        // shooting star *  
  circlex = circlex + 5; 

}


//moves the shooting star
function mousePressed() {
  circlex = mouseX;
  

}
