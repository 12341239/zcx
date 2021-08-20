
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,bgImg;
var rocket,rocketImg;
var alien,alienImg;
var bullet,bulletImg;
var alien2,alien2Img;
var alien3,alien3Img;
var bullet2,bullet2Img;
var bullet3,bullet3Img;


function preload(){
	bgImg = loadImage("bg.jpg");
	rocketImg = loadImage("rocket.jpg");
	alienImg = loadImage("alien.jpg");
	bulletImg = loadImage("bullet.jpg")
    alien2Img = loadImage("alien2.jpg");
	alien3Img = loadImage("alien3.jpg");
    bullet2Img = loadImage("bullet.jpg");
	bullet3Img = loadImage("bullet.jpg");

	
}

function setup() {
	createCanvas(800, 700);
	
	bg = createSprite(165,485,5,1);
	bg.addImage(bgImg);
	bg.scale = 1.3

	engine = Engine.create();
	world = engine.world;

	
	bg = createSprite(165,485,5,1);
	bg.addImage(bgImg);
	bg.scale = 1.3
	
	rocket = createSprite(400,600,600,100);
	rocket.addImage(rocketImg);
	rocket.scale = 0.7;


	alien = createSprite(400,200,1000,100);
	alien.addImage(alienImg);
	alien.scale = 0.7;

    bullet = createSprite(400,460,100,100);
	bullet.addImage(bulletImg);
	bullet.scale = 0.1;

	bullet2 = createSprite(100,460,100,100);
	bullet2.addImage(bulletImg);
	bullet2.scale = 0.1;

	bullet3 = createSprite(700,460,100,100);
	bullet3.addImage(bulletImg);
	bullet3.scale = 0.1;

	alien2 = createSprite(100,200,100,100);
	alien2.addImage(alien2Img);
	alien2.scale = 0.7;

	
	alien3 = createSprite(700,200,100,100);
	alien3.addImage(alien3Img);
	alien3.scale = 0.2;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(keyDown("UP_ARROW")) {
	rocket.velocityY = -6 ;
	
  }
  if(keyDown("LEFT_ARROW")) {
	rocket.velocityX = -6 ;


  }
  if(keyDown("RIGHT_ARROW")) {
	rocket.velocityX = 6 ;


  }
  if(keyDown("DOWN_ARROW")) {
	rocket.velocityY = 6 ;
  }
  if(keyDown("SPACE")) {
	bullet.velocityY = -6 ;

	if(keyDown("SPACE")) {
		bullet2.velocityY = -6 ;
	}
	if(keyDown("SPACE")) {
		bullet3.velocityY = -6 ;
	}
	if(keyDown("SPACE")) {
		bullet3.velocityY = -6 ;
	}
  
   if(bullet.isTouching(alien)){
		textSize(25);
		fill(black);
        text("aliens were killed", 400,460);
		Stroke(25);
	}



}

  






  drawSprites();
 
}



