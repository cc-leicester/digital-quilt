var song;
var slider;


  function setup() {
  createCanvas(400, 400);
    song = loadSound("mixkit-sci-fi-artificial-intelligence-speaks-291.mp3, loaded");
      slider = createSlider(0, 255, 100);
}
  

function loaded(){
  song.play(); 
}
  

  
function draw() {
  background(random(210)); 
  song.setVolume(slider.value());
}