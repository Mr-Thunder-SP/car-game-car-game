var blastImg,playerCar,bugatti,ai1,ai2,track,nitro,henry,bossAi,nos,gameState;

function preload(){
  gameState=0
  blastImg=loadImage("blast.png");
  playerCar=loadImage("lambo.png");
  bugatti=loadImage("bugattiAi.png");
  ai1=loadImage("car1.png");
  ai2=loadImage("car2.png");
  track=loadImage("raceStrip.png");
  nitro=loadImage("nitroBottle.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  henry=createSprite(400, 200, 50, 50);
  henry.addImage(playerCar)
  henry.scale=0.09

  bossAi=createSprite(400, 270, 50, 50);
  bossAi.addImage(bugatti)
  bossAi.scale=0.15

  playButton=createImg("playButton.gif")
  playButton.position(400,200)
  playButton.size(400,200)
  playButton.mouseClicked(changeState)
  imageMode(CENTER)

  nos=createSprite();
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(gameState==0){
   henry.visible=false
   bossAi.visible=false
   nos.visible=false
  }else{
    playButton.hide()
    henry.visible=true
    bossAi.visible=true
    image(track,width/2,height/2,width,height)
   
  }
  console.log(gameState)
}
function changeState(){
  gameState=1
}