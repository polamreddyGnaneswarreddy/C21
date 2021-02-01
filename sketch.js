
var canvas,fixedRect,movingRect;

function setup()
{
 canvas=createCanvas(800,800);
 fixedRect=createSprite(200,100,50,50);
 movingRect=createSprite(300,100,50,50);

 fixedRect.shapeColor="blue";
 movingRect.shapeColor="blue";

 fixedRect.debug=false;
 movingRect.debug=false;

 gameobject1=createSprite(400,100,50,50);
 gameobject2=createSprite(500,100,50,50);
 gameobject3=createSprite(600,100,50,50);
 gameobject4=createSprite(700,100,50,50);

 gameobject1.shapeColor="blue";
 gameobject2.shapeColor="blue";
 gameobject3.shapeColor="blue";
 gameobject4.shapeColor="blue";
}

function draw()
{
 background("gold");
 movingRect.x=mouseX;
 movingRect.y=mouseY;
 
 if(isTouching(gameobject3,movingRect))
 {
   gameobject3.shapeColor="red";
   movingRect.shapeColor="red";
 }
 else
 {
   gameobject3.shapeColor="blue";
   movingRect.shapeColor="blue";
 }

 drawSprites();
}

