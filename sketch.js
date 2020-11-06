var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,leftBar,RightBar,bottomBar;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var x;
function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	
	engine = Engine.create();
	world = engine.world;
	var packageBodyOptions={
      isStatic: true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageBodyOptions);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic: true} );
 	World.add(world, ground);
	Engine.run(engine);
	var bottomBar_options={
		isStatic: true
	}
	bottomBar=Bodies.rectangle(width/2,height-50,200,20,bottomBar_options);
	World.add(world,bottomBar);
	bottomBarSprite=createSprite(bottomBar.position.x,bottomBar.position.y,200,20);
	bottomBarSprite.shapeColor=rgb(255,0,0);

	var leftBar_options={
		isStatic: true
	}
	leftBar=Bodies.rectangle((width/2)-100,height-90,20,100,leftBar_options);
	World.add(world,leftBar);
	leftBarSprite=createSprite(leftBar.position.x,leftBar.position.y,20,100);
	leftBarSprite.shapeColor=rgb(255,0,0);

	var rightBar_options={
		isStatic: true
	}
	rightBar=Bodies.rectangle((width/2)+100,height-90,20,100,rightBar_options);
	World.add(world,rightBar);
	rightBarSprite=createSprite(rightBar.position.x,rightBar.position.y,20,100);
	rightBarSprite.shapeColor=rgb(255,0,0);
}


function draw() {
  
  background(0);
   rectMode(CENTER);
   packageSprite.x=packageBody.position.x;
   packageSprite.y=packageBody.position.y;
  

  drawSprites();
}

function keyPressed(x) {
	x=window.event;
 if (x.keyCode===40) {
	 Matter.Body.setStatic(packageBody,false);
	 packageBody.restitution=0;
  }
}



