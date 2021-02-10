const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,box1,box2;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 
  box1 = new Box(200,100,50,100);
  ground = new Ground(200,350,400,20);
  box2 = new Box(240,300,50,50);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  ground.display();
  box2.display();
}