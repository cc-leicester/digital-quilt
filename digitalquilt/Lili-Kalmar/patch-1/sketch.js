var a, b, c, d;

function setup() {
  createCanvas(500, 500);
  background(230);
  b = width/2;
  a = width;
  c = width * 0.2;
  d = width * 0.1;
}

function draw() {

}

function keyPressed() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    // If it's not a letter key, clear the screen
    background(230);
  }
  if (keyIndex > 12){
    keyIndex = -1;
    let r1 = random(255), r2 = random(255), r3 = random(255);
    for (var xCircles = d/2; xCircles<width; xCircles+=d){
      for (var yCircles = d/2; yCircles<height; yCircles+=d){
        for (var innerD = d; innerD>0; innerD-=10){
          stroke(r1,r2,r3);
          ellipse(xCircles, yCircles, innerD, innerD);
        }
      }
    }
     // again fill the page with circles, these are bigger
    for (var xCircles2 = c/2; xCircles2<width; xCircles2+=c){
      for (var yCircles2 = c/2; yCircles2<height; yCircles2+=c){
        for (var innerC = c; innerC>0; innerC-=10){
          stroke(r1,r2,r3);
          ellipse(xCircles2, yCircles2, innerC, innerC);
        }
      }
    }
     //one big cicrle in the middle, that goes from side to side(covers the whole page)
    for (var xCircles3 = a/2; xCircles3<width; xCircles3+=a){
      for (var yCircles3 = a/2; yCircles3<height; yCircles3+=a){
        for (var innerA = a; innerA>0; innerA-=10){
          stroke(r1,r2,r3);
          ellipse(xCircles3, yCircles3, innerA, innerA);
        }
      }
    }
  }
  if (keyIndex > -1) {
    keyIndex = -1;
    // drawing circles all over the page
    for (var xCircles = d/2; xCircles<width; xCircles+=d){
      for (var yCircles = d/2; yCircles<height; yCircles+=d){
        for (var innerD = d; innerD>0; innerD-=10){
          ellipse(xCircles, yCircles, innerD, innerD);
      }
    }
  }
  // again fill the page with circles, these are bigger
  for (var xCircles = c/2; xCircles<width; xCircles+=c){
    for (var yCircles = c/2; yCircles<height; yCircles+=c){
      for (var innerC = c; innerC>0; innerC-=10){
          let r1 = random(255), r2 = random(255), r3 = random(255);
          stroke(r1,r2,r3);
          ellipse(xCircles, yCircles, innerC, innerC);
        }
      }
    }
  }
}
