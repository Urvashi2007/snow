var snow
 
function preload() {
  BackgroundImg=loadImage("snow3.jpg")
}

function setup() {

  createCanvas(1500,550);
  createSprite(400, 200, 50, 50);
  snow=createSprite(600,200,{restitution:0.5,fricton:3,density:3, isStatic:true})
  snow.addAnimation("snow5.webp")
 snow.scale=0.2
  
}

function draw() {
  background(BackgroundImg);  
 
  snow.display()
  
  
 
}