var x = 200;
var y = 0;
var speed = 0;
var gravity = 0.1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
fill(30,25,30);
  noStroke();
  ellipse(x,y,20,20);
  
  y = y + speed;
  speed = speed + gravity;
  
  if(y>height){
    speed = speed * -0.9;
    y = height;
  }
}