
var ground,stop;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  var canvas = createCanvas(700,800);

  engine = Engine.create();
	world = engine.world;

  paper1 = new Paper(150,300,70);
  
  dustbin1 = new Dustbin(500,590,175,160);
  
  var options = {
    isStatic: true
  }

  stop = Bodies.rectangle(655,670,20,150,options);
  World.add(world,stop);

  ground = Bodies.rectangle(width/2,height-40,width,20,options);
  World.add(world, ground);
  
  launcher1 = new Launcher(paper1.body,{x:560,y:400});

	Engine.run(engine);
  
}


function draw() {
  background("KhaKi");

  rectMode(CENTER);
  Engine.update(engine);

  rect(ground.position.x,ground.position.y,width,20);
  rect(stop.position.x,stop.position.y,20,150);
  paper1.display(); 
  dustbin1.display();
  launcher1.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
 launcher1.fly();
}

