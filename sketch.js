
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, binSide1, binSide2, binSide3, ground;

function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	

	ground=new Ground();
	binSide1=new binSide(950,380,200,15);
	binSide2=new binSide(845,340,15,100);
	binSide3=new binSide(1045,340,15,100);
	ball=new Paperball(100,380,15);

	console.log(ball);

	Engine.run(engine);


  
}

function throwIntoBin(){
	if(keyCode === UP_ARROW){
		
		Body.applyForce(ball.bodies,ball.bodies.position,{x:2,y:-2.5})
		
	}
}

function suspend(){
	if(ball.bodies.position.x>850){
		
		Body.applyForce(ball.bodies,ball.bodies.position,{x:0,y:35})
		
	}
}
function draw() {
  
  background(0);
  Engine.update(engine);
  //console.log(ground.body.position.x);
  binSide1.display();
  binSide2.display();
  binSide3.display();
  ground.display();
  
  ball.display();

 

  throwIntoBin();
  suspend();
}



