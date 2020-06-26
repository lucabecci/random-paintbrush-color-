var spot = {
  x: 150,
  y: 100
};
var col = {
  r:255,
  g:0,
  b:0
}

function setup() {
  createCanvas(400, 400);
  background(220);
  
}

function draw() {
  
  spot.x = random(0, width);
  spot.y = random(0, height);
  col.r = random(0,255);
  col.g = random(0,255);
  col.b = random(0,255);
  noStroke();
  fill(col.r, col.g, col.b);
  ellipse(mouseX,mouseY,25,25);
}
function mousePressed(){
  background(220);
}