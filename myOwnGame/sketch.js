var car, carImg, car1Img, car2Img, car3Img;
var obstacle1 ,obstacleImg;
var select;
var ground, groundImg;
var gameState = 1;
var wallGrp1, wallGrp2, wallGrp3, wallGrp4;
var score;
var check;

function preload()
{
 groundImg = loadImage("ground2.png");
 //carImg = loadImage("player.png");
obstacleImg = loadImage("car.png");
}

function setup()
{
  createCanvas(670,600);
  ground = createSprite(250,300,400,70);
  ground.addImage(groundImg);
  ground.x =  ground.width/2
  ground.velocityX = -10;
  score = 0;
  var check = 0; 

  car = createSprite(200,450,90,30);
  car.shapeColor = "blue";
  //car.addImage(carImg);
  //car.scale = 0.15; 

  wallGrp1 = new Group();
  wallGrp2 = new Group();
  wallGrp3 = new Group();
  wallGrp4 = new Group();
}

function draw()
{
  background("yellow");
  select = Math.round(random(1,4));

  if(gameState === 1)
  {
      if(ground.x < 0)
    {
      ground.x = ground.width/2;
    }

    carColor();
    controls();
    wall();
    obstacles();

      if(car.isTouching(wallGrp1) && car.shapeColor === "orange" && check === 0)
      {
        score = score + 1;
      }
      else if(car.isTouching(wallGrp2) && car.shapeColor === "red" && check === 0)
      {
        score = score + 1;
      }
      else if(car.isTouching(wallGrp3) && car.shapeColor === "blue" && check === 0)
      {
        score = score + 1;
      }
      else if(car.isTouching(wallGrp4) && car.shapeColor === "yellow" && check === 0)
      {
        score = score + 1;
      }
      else if(car.isTouching(wallGrp1 && wallGrp2) || car.isTouching(wallGrp1 && wallGrp3) || car.isTouching(wallGrp1 && wallGrp4)
            || car.isTouching(wallGrp2 && wallGrp3) || car.isTouching(wallGrp2 && wallGrp4) || car.isTouching(wallGrp3 && wallGrp4))
      {
         score = score -5;
         check = 1;
      }
      else if(car.isTouching(wallGrp1) || car.isTouching(wallGrp2) || car.isTouching(wallGrp3) || car.isTouching(wallGrp4))
      {
        score = score - 5;
      }
  }
  else if(gameState === 0)
  {
    ground.velocityX = 0; 
    wallGrp1.setVelocityXEach(0);
    wallGrp2.setVelocityXEach(0);
    wallGrp3.setVelocityXEach(0);
    wallGrp4.setVelocityXEach(0);
  }
  
  drawSprites()
  textSize(30);
  textFont("georgia");
  fill("black");
  text("Score  = " + score, 450,70);
}

