var car,wall;
var speed,weight;
function setup() {
  speed=random(55,90);
  wall=random(400,1500);
  car=createSprite(50,200,50,50);
  car.shapeColor = "red";
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor = "orange";
  
var deformation = 0.5*weight*speed*speed/22500;

  createCanvas(800,400);  
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("white");
  car.velocityX=speed;
  if(car.isTouching(wall))
  {
    car.color="black";
  }
  if(car.isTouching(wall))
  {
    car.velocityX=0;
    var deformation=0.5 * width * speed * speed/22500;
    if(deformation>180)
    {
      car.shapeColor=color("red");
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color("yellow");
    }
    if(deformation<100)
    {
      car.shapeColor=color("green");
    }
  }  

  drawSprites();
  
