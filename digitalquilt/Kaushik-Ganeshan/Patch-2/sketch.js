//sets up the canvas and positions it to be 720 resoloution
function setup() {
  createCanvas(500, 500, WEBGL)
  angleMode(DEGREES)
}

function draw() {
  background(260);

  rotateX(60)

  noFill()
  stroke(255)

//from here to line 29, the code was taken and adapted from Colorful Coding (2020) Sine wave structures in p5.js | Coding Project #1 [Online] Available at https://www.youtube.com/watch?v=vmhRlDyPHMQ&t=447s [Accessed 2 May 2021]
  for (var i=0; i<20; i++) {
    var r = map(sin(frameCount / 2), -1, 1, 100, 200) //shows how long a colour lasts per frame movement
    var g = map(i, 0, 20, 100, 200)
    var b = map(cos(frameCount), -1, 1, 200, 100)

    stroke(r,g,b)

    beginShape()  //the code that determines the shape of the animation piece, in this case a triangle
    for (var j = 2; j < 180; j+=70){
      var rad = i*8
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount *2 +i *10) * 150

      vertex(y,x,z) //determines the direction in which the shape moves
    }
    endShape(CLOSE)
  }
}
