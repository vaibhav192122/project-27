
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper1,paper2,paper3,paper4,paper5;
var x,y

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
x=width/2
y=height/4+200

	Engine.run(engine);
	ground=new Ground(width/2,height/4,width/7,20)
	paper1=new Paper(x-80,y,20)
	paper2=new Paper(x-40,y,20)
	paper3=new Paper(x,y,20)
	paper4=new Paper(x+40,y,20)
	paper5=new Paper(x+80,y,20)

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();
 
 
}



