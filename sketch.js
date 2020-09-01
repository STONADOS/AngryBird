// var array = [3,4,5,6]
// console.log(array)
// console.log(array[2])

// var array2 = ["fruits", 2 , "cars", "pineapple"]
// console.log(array2)
// console.log(array2[2])

// var array3 = [[1,2], [2,4,5], [245,525,425,255]]
// console.log(array3)
// console.log(array3[2][1])

// array3.push("fruits")
// console.log(array3)
// array3.pop();
// console.log(array3)

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var log6;
var slingshot;
var gamestate = "onsling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    platform = new Ground(100,305,300,175);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    // log6 = new Log(230, 180, 80, PI/2);

    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body, {x:200, y:50});


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    // if ()

    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    // log6.display();

    bird.display();

    slingshot.display();
}

function mouseDragged(){
    if (gamestate != "launched"){
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
}
}

function mouseReleased(){
    slingshot.fly();
    gamestate = "launched";
}

function keyPressed(){
    if(keyCode == 32){
        slingshot.attach(bird.body);
        gamestate = "onsling";
    }
}