

var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var score=0;

function preload(){
  towerImg = loadImage("cloudback.jpg");
  doorImg = loadImage("bird.png");
  climberImg = loadImage("star.png");
  ghostImg = loadImage("cloud.png");
  spookySound = loadSound("spooky.wav");
}
door
function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  tower.scale = 2.8;
   

   ghost  =  createSprite(300,300);
   ghost.addImage(ghostImg);
   ghost.scale  =  0.6;
   
   doorsGroup= new Group();
   climbersGroup = new Group();
   invisibleBlockGroup = new Group();
  
    score = 0;
}

function draw() {
  background(0);
  
  if (gameState==="play"){
    
  
  
    
  if (keyDown("LEFT_ARROW"))
   {
     ghost.x = ghost.x -3;
   }

   if (keyDown("RIGHT_ARROW"))
   {
     ghost.x = ghost.x +3;
   }
    
   if (keyDown("UP_ARROW"))
   {
     ghost.velocityY = -10;   
   }
     ghost.velocityY =  ghost.velocityY + 0.8;

    
   spawndoor()

   if (climbersGroup.isTouching(ghost))
   {
     ghost.velocityY = 0;
   }
   if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState="end"; 
    //good job!
   }

  if(tower.y > 400){
      tower.y = 300
    }
    drawSprites();
  }
  if(gameState==="end")
  {
    stroke("yellow")
    fill("yellow")
    textSize(30)
  text("GAMEOVER!!",200,300)
  }
}



function spawndoor()
{
   if (frameCount % 300 === 0 ){
      door = createSprite(200,-50)
      climber = createSprite(200,10)
      climber.scale = 0.01
      invisibleBlock = createSprite(200,15)
      invisibleBlock.width = climber.width;
      invisibleBlock.height = 2;
      door.addImage(doorImg);
      climber.addImage(climberImg);
      

      door.x = Math.round(random(120,400))
      climber.x = door.x ;
      invisibleBlock.x = door.x;

      door.velocityY = +1;
      climber.velocityY = +1;
      invisibleBlock.velocityY = +1;
      invisibleBlock.debug = true;
      door.lifetime = 700;
      climber.lifetime = 600;
      invisibleBlock.lifetime = 600;
      ghost.depth= door.depth;
      ghost.depth+=1
      doorsGroup.add(door);
      climbersGroup.add(climber);
      invisibleBlockGroup.add(invisibleBlock);
   }
}
