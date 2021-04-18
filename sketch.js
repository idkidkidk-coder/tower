const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg;


var score=0
function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,800,1200,20)
    base = new Ground(550,550,210,15)

    box1 = new Box(490,500 ,30,40)
    box2 = new Box(520,500,30,40)
    box3 = new Box(550,500 ,30,40)
    box4 = new Box(580,500,30,40)
    box5 = new Box(610,500 ,30,40)
    box6 = new Box(640,500,30,40)
    box7 = new Box(460,500 ,30,40)
    box8 = new Box(490,450,30,40)
    box9 = new Box(520,450 ,30,40)
    box10 = new Box(550,450,30,40)
    box11 = new Box(580,450 ,30,40)
    box12 = new Box(610,450,30,40)
    box13 = new Box(520,400 ,30,40)
    box14 = new Box(550,400,30,40)
    box15 = new Box(580,400 ,30,40)
    box16 = new Box(550,350,30,40)

    ball = new Ball(300,50,20)
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:200, y:300});
}

function draw(){
    if(bg){
    background(bg);
    }
    textSize(35)
    fill("white")
    text ("SCORE "+score,width-300,50)
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    base.display();
    fill("skyblue")

    box1.display();
    box2.display();
    box3.display();
    box4.display(); 
    box5.display();
    box6.display();
    box7.display();
    fill("pink")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("turquoise")
    box13.display();
    box14.display();
    box15.display();
    fill("grey")
    box16.display();
    
    ball.display();

    slingshot.display();    
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
    }
}

async function getTime(){
    var response =await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
    var responsejson = await response.json();
    
    var dateTime = responsejson.datetime
    
    var hour=dateTime.slice(11,13)
    
    if(hour>=6&& hour<=19){
        bg = "blue"
    }

    else{
        bg= "black"
    }
  
}
