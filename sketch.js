const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1200,20);
    bird = new Bird(100,100);
    
    box1 = new Box(800,365,50,50);
    box2 = new Box(1000,365,50,50);
    pig1 = new Pig(900,365);
    log1 = new Log(900,330,250,PI/2);
    
    box3 = new Box(800,295,50,50);
    box4 = new Box(1000,295,50,50);
    pig2 = new Pig(900,295);
    log2 = new Log(900,260,250,PI/2);

    box5 = new Box(900,225,50,50);  
    log3 = new Log(793,215,150,PI/4);
    log4 = new Log(950,215,150,-PI/4)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    ground.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}