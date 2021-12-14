var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(200,200,50,50)
  ghost.addImage("ghost",ghostImg)
  ghost.scale = 0.4

  doorsGroup = new Group()
  climbersGroup = new Group()
  invisibleBlockGroup = new Group()
}

function draw() {
  background(200);
  if(gameState === "play"){

  if(tower.y > 400){
      tower.y = 300
    }

    if(keyDown("LEFT_ARROW")){
      ghost.x = ghost.x - 3  
    }
    if(keyDown("RIGHT_ARROW")){
      ghost.x = ghost.x + 3  
    }
    if(keyDown("SPACE")){
      ghost.velocityY = -10  
    }
    ghost.velocityY = ghost.velocityY + 0.5
    spawndoors()
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0 
  }
  if(invisibleBlockGroup.isTouching(ghost)){
    //ghost.destory()
    gameState = "end"
  }
    drawSprites()
}
if(gameState === "end"){
  fill ("yellow")
  textSize(30)
  text("game over",230,250)
}
}
function spawndoors(){
if(frameCount %0 === 0){
  var door = createSprite(200,-50)
  var climber = createSprite(200,10)
  var invisibleBlock = createSprite(200,15)
  invisibleBlock.width = climber.width
  invisibleBlock.height = 2

  door.x = Math.round(random(120,400))
  climber.x = door.x
  invisibleBlock.x = door.x
  door.addImage(doorImg)
  climber.addImage(climberImg)

  door.velocityY = 1
  climber.velocityY = 1
  invisibleBlock.velocityY = 1

  doorsGroup.add(door)
  climbersGroup.add(climber)
  invisibleBlockGroup.add(invisibleBlock)
}
}