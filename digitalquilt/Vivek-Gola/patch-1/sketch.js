function setup() {
  createCanvas(400, 400, WEBGL); 
  angleMode(DEGREES)
}

function draw() {
  background(22);
  
  rotateX(60)
  
  noFill()
  stroke(255)

  for (var i = 0; i < 20; i++){
      
    var r = map(sin(frameCount / 2), -1, 1, 100, 200)
    var g = map(i, 0, 20, 100, 200)
    var b = map(cos(frameCount),-1, 1, 200, 100)
    
    stroke(r,g,b)
    
    rotate(200)
    
    beginShape()
     for (var j = 0; j <360; j += 60) {
       var rad = i * 8 
       var x = rad * cos(j)
       var y = rad * sin(j)
       var z = sin(frameCount * 2 + i * 5) * 50 
       vertex(x, y, z)
     }
    endShape(CLOSE)
  }
}