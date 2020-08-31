function carColor()
{
    if(frameCount%500 === 0)
  {
    
    car.shapeColor = random(1,4);

    if(select === 1)
    {
      car.shapeColor = "red";
    }
    else if(select === 2)
    {
      car.shapeColor = "blue";
    }
    else if(select === 3)
    {
      car.shapeColor = "yellow";
    }
    else if(select === 4)
    {
      car.shapeColor = "orange";
    }

  }

}

function controls()
{
    if(keyDown(UP_ARROW))
    {
      car.velocityY = -3;
    }
    else if(keyDown(DOWN_ARROW))
    {
      car.velocityY = 3;
    }
    else
    {
      car.velocityY = 0;
    }
  
}

function wall()
{
 
  if(frameCount%200 === 0)
  {
    var wall1 = createSprite(670,390,50,60);
    wall1.velocityX = -2;
    wall1.lifetime = 345;
    wallGrp1.add(wall1);
    var wall2 = createSprite(670,450,50,60);
    wall2.velocityX = -2;
    wall2.lifetime = 345;
    wallGrp2.add(wall2);
    var  wall3 = createSprite(670,510,50,60);
    wall3.velocityX = -2;
    wall3.lifetime = 345;
    wallGrp3.add(wall3);
    var wall4 = createSprite(670,570,50,60);
    wall4.velocityX = -2;
    wall4.lifetime = 345;
    wallGrp4.add(wall4);
    
    wall1.shapeColor = "orange";
    wall2.shapeColor = "red";
    wall3.shapeColor = "blue";
    wall4.shapeColor = "yellow";

        if(select === 1)
        {
            wall1.y = 450;
            wall2.y = 390;
            wall3.y = 570;
            wall4.y = 510;
        }
        else if(select === 2)
        {
            wall1.y = 390;
            wall2.y = 510;
            wall3.y = 450;
            wall4.y = 570;
        }
        else if(select === 3)
        {
            wall1.y = 510;
            wall2.y = 570;
            wall3.y = 390;
            wall4.y = 450;
        }
        else if(select === 4)
        {
            wall1.y = 570;
            wall2.y = 450;
            wall3.y = 510;
            wall4.y = 390;
        }
    }

}

function obstacles()
{
    if(frameCount%300 === 0 )
    {
      var obstacle1 = createSprite(650,20,70,30);
      obstacle1.velocityX = -2;
      obstacle1.y = random(500,800);
      obstacle1.addImage(obstacleImg);
      obstacle1.scale = 0.2;
    }
}
