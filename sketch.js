var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var greenleaf,orangeleaf,redleaf,greenleafImg,orangeleafImg,redleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  
  greenleafImg = loadImage("leaf.png")
  orangeleafImg = loadImage("orangeLeaf.png")
  redleafImg = loadImage("redImage.png")
}


function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


  
//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);

  rabbit.x = World.mouseX;


  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnredLeaves();
  spawnorangeLeaves();
  spawnApples();
  spawngreenLeaves();
  drawSprites();
}

function spawnApples() {
if(frameCount % 80 === 0){
apple = createSprite(200,100,10,10);
apple.addImage(appleImg);
apple.x = Math.round(random(100,300));
apple.velocityY = 2;
apple.scale=0.05;
apple.lifetime=150;
}
}
function spawngreenLeaves(){
if(frameCount % 80 === 0){
 greenleaf= createSprite(250,50,10,10);
 greenleaf.addImage(greenleafImg);
 greenleaf.x = Math.round(random(100,300));
 greenleaf.velocityY = 2;
 greenleaf.scale=0.05;
 greenleaf.lifetime=150;
}
}
function spawnorangeLeaves(){
  if(frameCount % 80 === 0){
    orangeleaf= createSprite(250,50,10,10);
    orangeleaf.addImage(orangeleafImg);
    orangeleaf.x = Math.round(random(100,300));
    orangeleaf.velocityY = 2;
    orangeleaf.scale=0.05;
    orangeleaf.lifetime=150;
  }
  }

  function spawnredLeaves(){
    if(frameCount % 80 === 0){
      redleaf= createSprite(250,50,10,10);
      redleaf.addImage(redleafImg);
      redleaf.x = Math.round(random(100,300));
      redleaf.velocityY = 2;
      redleaf.scale=0.05;
      redleaf.lifetime=150;
    }
    }





























