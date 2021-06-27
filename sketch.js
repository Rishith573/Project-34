const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero, ground, villian, bgImg, rope;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block9, 
block10, block11, block12, block13, block14, block15, block16, block17, block18,
block19, block20, block21, block22, block23, block24, block25, block26, block27;

function preload() {
  
  villianImg = loadImage("images/villian.png");
  bgImg = loadImage("images/clouds.jpg");
}

function setup() {
  createCanvas(2000, 1000);
// creating engine
  engine = Engine.create();

// run the engine
  Engine.run(engine);

  world = engine.world;
  // create sprites here

  rope = new Rope(hero, {x:635, y:3})

  hero = new Hero(600, 300, 70);
  villian = new Monster(150, 300, 50)
  ground = new Ground(600, 450, 700, 20);
  block1 = new Block(300, 420, 30, 30);
  block2 = new Block(300, 370, 30, 30);
  block3 = new Block(300, 320, 30, 30);
  block4 = new Block(300, 270, 30, 30);
  block5 = new Block(300, 220, 30, 30);
  block6 = new Block(300, 170, 30, 30);
  block7 = new Block(300, 120, 30, 30);
  block8 = new Block(300, 70, 30, 30);
  
  block9 = new Block(350, 270, 30, 30);
  block10 = new Block(350, 220, 30, 30);
  block11 = new Block(350, 170, 30, 30);
  block12 = new Block(350, 120, 30, 30);
  block13 = new Block(350, 70, 30, 30);
  block14 = new Block(350, 20, 30, 30);
  
  block15 = new Block(400, 320, 30, 30);
  block16 = new Block(400, 270, 30, 30);
  block17 = new Block(400, 220, 30, 30);
  block18 = new Block(400, 170, 30, 30);
  block19 = new Block(400, 120, 30, 30);
  block20 = new Block(400, 70, 30, 30);
  block21 = new Block(400, 20, 30, 30);

  bgImg.scale = 0.5
}

function draw() {
  background(bgImg);

  textSize(20);
  text("Position: " + mouseX + ", " + mouseY, 50, 50);

  hero.display();
  rope.display();
  villian.display();
  ground.display();
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
  block19.display();
  block20.display();
  block21.display();

}

