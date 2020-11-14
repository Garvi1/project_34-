
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Mouse = 
Matter.Mouse; const Constraint 
= Matter.Constraint; const MouseConstraint 
= Matter.MouseConstraint;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 620);


	engine = Engine.create();
	world = engine.world;

	let canvasMouse = Mouse.create(canvas.elt);
	canvasMouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasMouse
	};

	mConstraint = MouseConstraint.create(engine, options);
	World.add(world,mConstraint);


	
  roof1  = new Roof(650,100,200,50)

  Ball1 = new Ball(600,500,40);
  Ball2 = new Ball(640,500,40)
  Ball3 = new Ball(680,500,40)
  Ball4 = new Ball(720,500,40)
  Ball5 = new Ball(760,500,40)
	//Create the Bodies Here.

constraint1={ bodyA:Ball1.body, 
bodyB:roof1.body, stiffness :0.04, }
var pendulum1=Constraint.create(constraint1) 
World.add(world, pendulum1); 
	
constraint2={ bodyA:Ball2.body, 
bodyB:roof1.body, stiffness :0.04, }
var pendulum2=Constraint.create(constraint2)
 World.add(world, pendulum2); 

 constraint3={ bodyA:Ball3.body, 
bodyB:roof1.body, stiffness :0.04, }
var pendulum3=Constraint.create(constraint3)
 World.add(world, pendulum3); 

 constraint4={ bodyA:Ball4.body, 
bodyB:roof1.body, stiffness :0.04, }
var pendulum4=Constraint.create(constraint4)
World.add(world, pendulum4); 

 constraint5={ bodyA:Ball5.body, 
bodyB:roof1.body, stiffness :0.04, }
var pendulum5=Constraint.create(constraint5)
 World.add(world, pendulum5); 

  
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);
  roof1.display();
  Ball1.display(); 
  Ball2.display(); 
  Ball3.display(); 
  Ball4.display(); 
  Ball5.display(); 

line(Ball1.body.position.x,
Ball1.body.position.y,
roof1.body.position.x-80,
roof1.body.position.y);
line(Ball2.body.position.x,
	Ball2.body.position.y,
	roof1.body.position.x-40,
	roof1.body.position.y);
	line(Ball3.body.position.x,
		Ball3.body.position.y,
		roof1.body.position.x,
		roof1.body.position.y);
		line(Ball4.body.position.x,
			Ball4.body.position.y,
			roof1.body.position.x+40,
			roof1.body.position.y);
			line(Ball5.body.position.x,
				Ball5.body.position.y,
				roof1.body.position.x+80,
				roof1.body.position.y);
	
drawSprites();
}


function mouseDragged(){
	Matter.Body.setPosition(pendulam1.body,{x:mouseX,y:mouseY})
}
