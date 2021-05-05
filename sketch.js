var bullet,wall;

var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50,200,100,20);
  
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  //wall.shapeColor("Grey");

  speed=random(223,321);
  bullet.velocityX=speed;
  weight=random(30,52);

  
}

function draw() {
  background(0,0,0); 
  
 hasCollided(bullet,wall);



  drawSprites();
}

function hasCollided(a,b) {
  if (a.x-b.x<(b.width+a.width)/2) 
  {
    b.velocityX=0;
    var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10) {
      b.shapeColor=color(255,0,0);
    }
    
    if (damage<10) {
      b.shapeColor=color(0,255,0);
    }
  }
}