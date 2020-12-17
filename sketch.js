
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var roofobject,bob1,bob2,bob3,bob4,bob5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roofobj= new roof(400,50,500,10)
	bob1 =new bob(200,500,50)
	bob2 =new bob(250,500,50)
	bob3 =new bob(300,500,50)
	bob4 =new bob(350,500,50)
	bob5 =new bob(400,500,50)
	rope1=new rope(bob1.body,roofobj.body,-200,0)
	rope2=new rope(bob2.body,roofobj.body,-150,0)
	rope3=new rope(bob3.body,roofobj.body,-100,0)
	rope4=new rope(bob4.body,roofobj.body,-50,0)
	rope5=new rope(bob5.body,roofobj.body,0,0)

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	

	


	


	Engine.run(engine);
	Render.run(render)
  
}


function draw() {
  rectMode(CENTER);
  background(230);
roofobj.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  
  drawSprites();
 
}
function mouseDragged() {
	

	  Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});

	
}



