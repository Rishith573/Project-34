const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero, heroImg, ground, villian, villianImg, bgImg;

function preload() {
  
  villianImg = loadImage("images/villian.png");
  bgImg = loadImage("images/clouds.jpg");
}

function setup() {
  createCanvas(1250, 600);
// creating engine
  engine = Engine.create();

// run the engine
  Engine.run(engine);

  world = engine.world;
  // create sprites here

  hero = new Hero(150, 300, 50);
  ground = new Ground(500, 450, 1000, 20);

  

}

function draw() {
  background(bgImg);

  textSize(20);
  text("Position: " + mouseX + ", " + mouseY, 50, 50);

  hero.display();
  ground.display();

}

