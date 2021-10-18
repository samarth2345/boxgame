var box1
function setup() {
  createCanvas(400,400);
  box1=createSprite(200,200,50,50)
  box1.shapeColor=("blue")
}

function draw() 
{
  background(30);

  if(keyDown("RIGHT_ARROW")){
    box1.velocityX=3
  }
  if(keyDown("LEFT_ARROW")){
    box1.velocityX=-3
  }
  if(keyDown("UP_ARROW")){
    box1.velocityY=-3
  }
  if(keyDown("DOWN_ARROW")){
    box1.velocityY=3
  }
  drawSprites()
}




