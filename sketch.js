const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero, heroImg, villian, villianImg, bgImg;

function preload() {
  
  villianImg = loadImage("images/villian.png");
  bgImg = loadImage("images/bg.jpg");
}

function setup() {
  createCanvas(1250, 600);
// creating engine
  engine = Engine.create();

// run the engine
  Engine.run(engine);

  world = engine.world;
  // create sprites here

  hero = new Hero(100, 200, 50, 50);

}

function draw() {
  background(bgImg);

}

