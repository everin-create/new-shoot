const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var platform;
var slingShot;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(600, 280, 300, 40);

    block1= new Box(330,235,30,40);
    block2= new Box(360,235,30,40);
    block3= new Box(390,235,30,40);
    block4= new Box(420,235,30,40);
    block5= new Box(450,235,30,40);
    block6= new Box(360,195,30,40);
    block7= new Box(390,195,30,40);
    block8= new Box(420,195,30,40);
    block9= new Box(390,155,30,40);
    polygon= Bodies.circle(50,200,20);

   
    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    polygon.dislplay();
    platform.display();
   
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    }


function mouseReleased(){
    slingshot.fly();
}