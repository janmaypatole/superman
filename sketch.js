const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var box3,box4;
var box5;
var box6,box7;
var box8,box9;
var box10,box11;
var box12,box13;
var box14,box15;
var ball1,enemy;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,600,1200,20)
    
    
   ball1 = new Ball(200,400,100,100)
   enemy = new Enemy(1100,400,100,100)
    //building1 
    box1 = new Box(600,400,100,100)
    box2 = new Box(600,400,100,100)
    box3 = new Box(600,400,100,100)
    box4 = new Box(600,400,100,100)
    box5 = new Box(600,400,100,100)

    //building2
    box6 = new Box(800,400,100,100)
    box7 = new Box(800,400,100,100)
    box8 = new Box(800,400,100,100)
    box9 = new Box(800,400,100,100)
    box10 = new Box(800,400,100,100)
 
    //building 3
    box11 = new Box(1000,400,100,100)
    box12 = new Box(1000,400,100,100)
    box13 = new Box(1000,400,100,100)
    box14 = new Box(1000,400,100,100)
    box15 = new Box(1000,400,100,100)
} 

function draw(){
    background(0);
    Engine.update(engine);
    enemy.display();
    ball1.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box5.display();
    box4.display();
    box3.display();
  box1.display();
  box2.display();
   ground.display(); 


   
   if(enemy>1100){
       console.log("you win")
   }
}

