var canvas;
var h1;
var buttom;
var bgcolor;
var slider;
var input;
var name;


function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(200, 300);
  bgcolor = color(20,110,220);
  h1 = createElement("h1", "hhaha,this is rapstar");
  h1.position(100, 300);
  button = createButton("BUTTOn")
  button.position(100,500);
  button.mousePressed(changeColor);
  slider = createSlider(10,500,50);
  input = createInput('text');
  name = createP('changing');

}

function changeColor(){
  bgcolor = color(random(200)); 
}

function mousePressed() {
  h1.html("I am here");
  createP("my love where is " + random(-10, 10));
}

function draw() {
  //clear();
  background(bgcolor);
  ellipse(300,80,slider.value());
  fill(20,240,10);
  text(input.value(),20,210);
  textSize(30);
}
