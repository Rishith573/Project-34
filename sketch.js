const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero, heroImg, villian, villianImg, bgImg;

function preload() {
  
  villianImg = loadImage("images/villian.png");
  bgImg = loadImage("images/bgImg.jpg");
  heroImg = loadImage("images/hero.gif")
}

function setup() {
  createCanvas(3000, 800);
// creating engine
  engine = Engine.create();

// run the engine
  Engine.run(engine);

  world = engine.world;
  // create sprites here

}

function draw() {
  background(bgImg);

}

