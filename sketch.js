const Engine     = Matter.Engine;
const  World     = Matter.World;
const Bodies     = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
var canvas = createCanvas(800,800)
engine = Engine.create();
world = engine.world;

ground = new Ground(390,440,150,10);
ground2 = new Ground(600,300,150,10)

figure = new Polygon(100,500,40);

sling = new SlingShot(figure.body,{x:100,y:500})

//block's of ground2
//level three
block1 = new Block(540,250,30,40);
block2 = new Block(570,250,30,40);
block3 = new Block(600,250,30,40);
block4 = new Block(630,250,30,40);
block5 = new Block(660,250,30,40);
//level two
block6 = new Block(570,210,30,40);
block7 = new Block(600,210,30,40);
block8 = new Block(630,210,30,40);
//level one
block9 = new Block(600,170,30,40);


//block's of ground
//level three
block10  = new Block(330,400,30,40);
block11 = new Block(360,400,30,40);
block12 = new Block(390,400,30,40);
block13 = new Block(420,400,30,40);
block14 = new Block(450,400,30,40);
//level two
block15 = new Block(360,360,30,40);
block16 = new Block(390,360,30,40);
block17 = new Block(420,360,30,40);
//level one
block18 = new Block(390,320,30,40);
}


function draw(){
background("lightgreen")
Engine.update(engine);



ground.display();
ground2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();

figure.display();

sling.display();

}
function mouseDragged(){
      
    Matter.Body.setPosition(figure.body,{x:mouseX, y: mouseY})

}

function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode === 32){
        sling.attach(figure.body)
       }
}