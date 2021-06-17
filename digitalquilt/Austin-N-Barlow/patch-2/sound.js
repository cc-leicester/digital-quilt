let osc, fft;
  //setting up the canvas
function setup() {
    createCanvas(600, 600);
    background("grey");
    colorMode(HSB);

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(0.1);

  fft = new p5.FFT();
  osc.start();
  
  strokeWeight(0);  //set strok weight to zero
}


function draw() {
      line(mouseX, mouseY, pmouseX, pmouseY); //drawing lines 

  // change oscillator frequency based on mouseX
  let freq = map(mouseX, 0, width, 1, height);
  osc.freq(freq);

  let amp = map(mouseY, 0, width, 1, 0.01);
  osc.amp(amp);
  
  text('1= black', height/60, width/60);  //different texts
    text('2= red', height/60, width/14);
      text('3= green', height/60, width/8.5);
        text('4= blue', height/60, width/6);
          text('5= grey', height/60, width/4.5);
            text('s= save', height/60, width/3.75);

}
  function mousePressed() { // mouse pressed for different colours 
    strokeWeight(5);
    osc.start();
  }
  function mouseReleased() {
    strokeWeight(0);
    osc.stop(); // stopping sound when lines arent drawn 
  }
  function keyReleased() {
    if (key == "1")
    stroke("black");
    
    if (key == "2")
    stroke("red");
    
    if (key == "3")      
    stroke("green");

    if (key == "4")
    stroke("blue");
    
    if (key == "5")
    stroke("grey");
    
    if (key == 's' || key == 'S') 
    saveCanvas(gd.timestamp(), 'png');
  }
