const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,object;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();

  var options = {
    isStatic: true
  }

  world = engine.world;

  object = Bodies.rectangle(200,20,50,50,options);
  World.add(world,object);
}

function draw() {
  background("yellow");
  Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,30,30); 


  drawSprites();
}