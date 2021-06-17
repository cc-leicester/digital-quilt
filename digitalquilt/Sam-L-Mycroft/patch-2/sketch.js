let theta;
let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(500, 500);
  background(0);

  frameRate(5);
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;
  cx = 0;
  cy = 0;


}

function draw() {
  frameRate(30);
  strokeWeight(1)
  stroke((mouseX/900)*255,0,(mouseY/900)*255);
  theta = radians(random(0,360));
  translate(width/2,height/2);
  branch(300);

  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  strokeWeight(2);
  stroke(0,0,0);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(6);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);


}

function branch(h) {
  h *= random(30,70)/100;
  if (h > 5) {
    push();
    theta *= random(60,150)/100;
    rotate(theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
    push();
    theta *= random(50,150)/100;
    rotate(-theta);
    line(0, 0, 0, h);
    translate(0, -h);
    branch(h);
    pop();



  }
}
