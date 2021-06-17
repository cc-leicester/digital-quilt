//The Circular Vivid Polygons , Farah Razak_209027586_Digital Arts_CO1110_Portfolio_Patch1
// Year 2021

// This is my first visual animation design. They are consisted of three dintintive polygon shapes, where in total there are six of them - moving clockwise and anti-clockwise - meaning the each same shape is moving against eachother so each could form it's own cut when intersects each other. Starting from the first shape (left), which is a triangle, in the middle is a 20 sides polygon and the right ones is a Heptagon. Deciding which color scheme to use is challenging, where they need to contrast each other as well as with the background, making them appear slight 3D, stand out and avoid the ordinary colors. As a result, purple, red and grayish blue were chosen. Where the brightest color, red, being in the middle as the spotlight while the purple and grayish blue to be surrounding the red. I also have chosen two color shades of the same color for each shape so they have this nice fading transition between dark and pastel, showcasing the warmth of the colors overall. I named this design "The Circular Vivid Polygons" because the strong "vivid" coloured "polygons" are moving "circularly".

//References:
//P5js.org. n.d. examples | p5.js. [online] Available at: <https://p5js.org/examples/form-regular-polygon.html>.

function setup(){ // sets up the artwork
  createCanvas(500, 500); // creates a square canvas of resolution 720 pixels
  background(0,0,0); //setting the canvas background color as black so the animation contrast well and appearing slight 3D
}

function draw(){ // draws the artwork

//drawing first polygon
  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 30.0); //i set the framecount as 100 for each shape so they rotate evenly without clashing eachother
  let c = color(45, 33, 102); //make the shape color purple
  fill(c); //teling object c (polygon) to fill in the color
  polygon(0, 133, 82, 3); //(x,y,radius,npoints)
  pop(); //appear

//drawing second polygon
  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / -30.0); //i set the framecount as 100 for each shape so they rotate evenly without clashing eachother
  c = color(150, 145, 176); //make the shape color pastel purple
  fill(c); //teling object c (polygon) to fill in the color
  polygon(0, 133, 82, 3); //(x,y,radius,npoints)
  pop(); //appear



//drawing third polygon
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / -30.0); //i set this one -100 so it goes anti-clockwise
  c = color(194, 5, 5); //make the shape color blue
  fill(c); //teling object c (polygon) to fill in the color
  polygon(0, -133, 80, 20); //(x,y,radius,npoints)
  pop(); //appear

//drawing the fourth polygon
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 30.0); //i set the speed same as the first shape so both rotate evenly and at the same time
  c = color(247, 129, 128); //make the color pastel blue
  fill(c); //teling object c (polygon) to fill in the color
  polygon(0, -133, 80, 20); //(x,y,radius,npoints)
  pop(); //appear


//drawing fifth polygon
  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -30.0); //i set the speed same as the first shape so both rotate evenly and at the same time
  c = color(61, 100, 122); //make the color pink
  fill(c); //teling object c (polygon) to fill in the color
  polygon(0, 133, 70, 7); //(x,y,radius,npoints)
  pop(); //appear

//drawing the sixth polygon
  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / 30.0); //i set the speed same as the first shape so both rotate evenly and at the same time
  c = color(128, 161, 181); //make the color pastel pink
  fill(c); //teling object c (polygon) to fill in the color
  polygon(0, 133, 70, 7); //(x,y,radius,npoints)
  pop(); //appear

}


  function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);

}
