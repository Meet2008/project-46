var player,invi1,invi2,pet,inviCirc,aliensGroup,bg,bulletsGroup,bullets,alien,aliens,safetyLine

var playerImg,bulletsImg,petImg,alienImage1,alienImage2,backgroundImg,healthE,fuelE,powerE,sheildE

function preload(){
	playerImg = loadImage("images/playerShip.png");
	bulletsImg = loadImage("images/bullet.png");
	petImg = loadImage("images/pet.png");
	alienImage1 = loadImage("images/alienShip1.png");
	alienImage2 = loadImage("images/alienShip2.png");
	backgroundImg = loadImage("images/background1.png");
	healthE = loadImage("images/HealthEle.png");
	fuelE = loadImage("images/fuelEle.png");
	powerE = loadImage("images/powerEle.png");
	sheildE = loadImage("images/SheildEle.png");
}

function setup(){
	createCanvas(displayWidth,displayHeight);

	bg = createSprite(displayWidth/2,displayHeight/2);
	bg.addImage(backgroundImg);
	bg.scale=3

	safetyLine = createSprite(displayWidth/2,displayHeight/2+50,1200,10);
    safetyLine.shapeColor = "green"

	inviCirc = createSprite(displayWidth/2,displayHeight/2+160,500,500);
	inviCirc.visible = false;

	player = createSprite(displayWidth/2,displayHeight/2+160);
	player.addImage(playerImg);
	player.scale = 0.3;

	invi1=createSprite(20,340+160,20,100);
	invi1.visible=false;

	invi2=createSprite(displayWidth-20,displayHeight-380+160,20,100);
	invi2.visible=false;
	
	pet = createSprite(500,500);
	pet.addImage(petImg);
	pet.scale=0.1

	aliensGroup = new Group();	
  
}


function draw(){
  rectMode(CENTER);
  background(0);

 if(keyCode === 39){
	 player.velocityX=5
 }

 if(keyCode === 37){
	 player.velocityX=-5
 }

 if(player.isTouching(invi1)){
	 player.velocityX=1;
 }

 if(player.isTouching(invi2)){
	 player.velocityX=-1
 }

 if(keyWentDown("space")){
	 createBullet();
 }

 player.debug=false;
 player.setCollider("circle",0,0,150);

 spawnAlien();
 element();
 
 drawSprites();
 
}

function createBullet() {
	var bullets = createSprite(100, 100, 60, 10);
	bullets.addImage(bulletsImg);
	bullets.x = player.x;
	bullets.y = player.y-30;
	bullets.velocityY = -4;
	bullets.lifetime = 100;
	bullets.scale = 0.5;	 
}
  
  function spawnAlien() {
	if(frameCount % 150 === 0) {
	  var al = createSprite(200,200);
	  al.velocityY = 0.5
	  
	  var rand = Math.round(random(1,2));
	  switch(rand) {
		case 1: al.addImage(alienImage1);
				break;
		case 2: al.addImage(alienImage2);
				break;
		default: break;
	  }

	  al.scale = 0.2;
	  al.x = Math.round(random(50,1200));
	  al.y = Math.round(random(0,10));
	  aliensGroup.add(al);
	}
  }

function element(){
	
	if(frameCount%10000 === 0){
		var ele = createSprite(200,200);
		var ran = Math.round(random(1,4))

		switch(ran){
			case 1:ele.addImage(sheildE);
				 break;
			case 2:ele.addImage(powerE);
				 break;
			case 3:ele.addImage(fuelE);
				 break;
			case 4:ele.addImage(healthE);
				 break;
			default: break;
		}
		ele.scale = 0.8;
		ele.x = Math.round(random(50,1000));
		ele.y = Math.round(random(0,50));
		ele.velocityY = 1;
		ele.lifetime=600
	}
	}


