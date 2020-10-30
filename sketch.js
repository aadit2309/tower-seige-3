const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var score = 0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  ground1 = new Ground (400,300,300,10);
  box8 = new box (330,235,30,40);
  box9 = new box (360,235,30,40);
  box10 = new box (390,235,30,40);
  box11= new box (420,235,30,40);
  box12 = new box (450,235,30,40);
  box13 = new box (360,195,30,40);
  box14 = new box (390,195,30,40);
  box15 = new box (420,195,30,40);
  box16 = new box (390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot (polygon,{x:100,y:200});
  
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  text("Score  " + score, width-300, 50)
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  
  

  ellipseMode(RADIUS);
  ellipse(polygon.position.x,polygon.position.y,20,20)

  slingShot.display();

  ground1.display();
  
}

function mouseDragged(){
      Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingShot.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bgcolour = "black";
  }
  else{
      bgcolour = "yellow";
  }
}