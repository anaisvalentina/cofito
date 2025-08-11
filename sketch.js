function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index','-1');
   background(255,216,223);
}

function draw() {
  d= random(10,60)
  fill (255,random(55,200))
  ellipse(mouseX,mouseY,d,d);
}
