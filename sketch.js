var movingRect, fixedRect


function setup() {
  createCanvas(800, 600);

  movingRect = createSprite(400, 200, 30, 80);
  movingRect.shapeColor = "yellow";
  movingRect.velocityY = 6;

  fixedRect = createSprite(400,400, 80 ,30);
  fixedRect.shapeColor = "yellow";
  fixedRect.velocityY = -6;

}

function draw() {
  background("black");  
  
  //movingRect.x = mouseX;
 //movingRect.y = mouseY;

  bounceOff(movingRect, fixedRect);

  drawSprites();
}


