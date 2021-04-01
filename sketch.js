var player;
var enemy1,enemy2,enemy3,enemy4,enemy5;
var enemyLaserG;
var heroLaserG;
var enemyImg, heroImg, bgImg, bossImg;
var spaceImg;

function preload(){
 enemyImg = loadImage("Images/Enemy.png");
 heroImg = loadImage("Images/Hero.png");
 spaceImg = loadImage("Images/Space.jpg");
 bossImg = loadImage("Images/Boss.png");

}

function setup() {
  createCanvas(1255,555);

  player = new Player();

  enemy1 = new Enemy(1255,50);
  enemy2 = new Enemy(1255,150);
  enemy3 = new Enemy(1255,250);
  enemy4 = new Enemy(1255,350);
  enemy5 = new Enemy(1255,450);

  enemyLaserG = new Group();
  heroLaserG = new Group();
}

function draw() {
  background(spaceImg);  
  fill("Orange");
  textSize(15);
  text("HP- "+player.health,35,15);
  if(player.health>0.1){
    fill("green");
    rect(20,20,player.health,10);
  }


  player.move();
  player.shoot();
  player.destroy();
 
  enemy1.shoot();
  enemy1.move();
  enemy1.destroy();
  enemy2.shoot();
  enemy2.move();
  enemy2.destroy();
  enemy3.shoot();
  enemy3.move();
  enemy3.destroy();
  enemy4.shoot();
  enemy4.move();
  enemy4.destroy();
  enemy5.shoot();
  enemy5.move();
  enemy5.destroy();

  drawSprites();
}