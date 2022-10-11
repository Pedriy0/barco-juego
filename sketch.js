var ship , ship_jump;
var ground ,invisibleground, groundimage;

function preload(){
  background
  ship_jump = loadAnimation("goingmerry.png","goingomerry.png");
 
  groundimage = loadImage("oceanman.jpg");
}


function setup(){
  createCanvas(800,800);

  invisibleground = createSprite(200,385,400,20);
  
  ground = createSprite(80,280,20,20)
  ground.addImage("ground",groundimage)

  ship = createSprite(80,280,20,20);
  ship.addAnimation("jump", ship_jump);
  ship.scale = 0.25

  ground.velocityX = -4
  ground.scale = 2

  
}

function draw() {
  background("white");
 drawSprites()

 ship.velocityY = ship.velocityY + 0.8;

 if (keyDown("space") && ship.y >+ 245) {
  ship.velocityY = -10;
}
 if (ground.x < 0){
  ground.x = ground.width/2
}
ship.collide(invisibleground)
}