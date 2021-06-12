var fixedRect, movingRect;
var ball

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ball = createSprite(200,200,100,20)
  ball.shapeColor = "green"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(ball,movingRect)) {
    movingRect.shapeColor = "red";
    ball.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    ball.shapeColor = "green";
  }


  drawSprites();
}
function isTouching(object1,object2){
  if(object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2) {
    return true
    }
  else{
    return false 
  }

}