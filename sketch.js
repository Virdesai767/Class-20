var b1, b2
function setup() {
  createCanvas(800,400);
  b2 = createSprite(400, 200, 50, 50);
  b2.shapeColor = "White"
  b1 = createSprite (200,200,50,50)
  b1.shapeColor = "White"
}

function draw() {
  background(0)  
  drawSprites()

b2.x = mouseX;
b2.y = mouseY;

if(b1.x - b2.x<b1.width/2 + b2.width/2&&
  b2.x - b1.x<b1.width/2 + b2.width/2&&
  b1.y - b2.y<b1.height/2 + b2.height/2&&
  b2.y - b1.y<b2.height/2 + b1.height/2) {
  b1.shapeColor = "Green";
  b2.shapeColor = "Green";
}else {
  b1.shapeColor = "White";
  b2.shapeColor = "White";
}
}