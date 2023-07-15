var pecinha,pecinha1,pecinha2,pecinha3,pecinha4,pecinha5

var wa111,
wa112,
wa113,
wa114,
wa115,
wa116,
wa117,
wa118,
wa119,
wa1110,
wa1111,
wa1112

var count


function setup() {
  
  createCanvas(400,400);
  
  wa111=createSprite(190, 120, 250, 3)
  wa112=createSprite(190, 260, 250, 3)
  wa113=createSprite(67, 145, 3, 50)
  wa114=createSprite(64, 235, 3, 50)
  wa115=createSprite(313, 145, 3,50)
  wa116=createSprite(313, 235, 3, 50)
  wa117=createSprite(41, 170, 50, 3)
  wa118=createSprite(41, 210, 50, 3)
  wa119=createSprite(337, 210, 50, 3)
  wa1110=createSprite(337, 170, 50, 3)
  wa1111=createSprite(18, 190, 3, 40)
  wa1112=createSprite(361, 190, 3, 40)
  
  
  pecinha=createSprite(33, 190, 12, 12)
  
  pecinha1=createSprite(115, 190, 12, 12)
  pecinha2=createSprite(175, 190, 12, 12)
  pecinha3=createSprite(230, 190, 12, 12)
  pecinha4=createSprite(290, 190, 12, 12)
  pecinha5=createSprite(300, 190, 15 , 33)
    pecinha.shapeColor='green'
  
  pecinha1.shapeColor='rgb(22,17,17)'
  pecinha2.shapeColor='black'
  pecinha3.shapeColor='rgb(22,17,17)'
  pecinha4.shapeColor='black'
  pecinha5.shapeColor='grey'

  pecinha1.velocityY=11
  pecinha2.velocityY=11
  pecinha3.velocityY=11
  pecinha4.velocityY=11
  pecinha5.velocityY=11
  
  count=0
}

function draw() {
  background('black');
   
  fill('lightblue')
  rect(18, 170, 52, 40)
  rect(308, 170, 52, 40)
  



  

 
  pecinha1.bounceOff(wa111)
  pecinha1.bounceOff(wa112)
  pecinha2.bounceOff(wa111)
  pecinha2.bounceOff(wa112)
  pecinha3.bounceOff(wa111)
  pecinha3.bounceOff(wa112)
  pecinha4.bounceOff(wa111)
  pecinha4.bounceOff(wa112)
  pecinha5.bounceOff(wa111)
  pecinha5.bounceOff(wa112)

  
  
if(keyDown('right')){
 pecinha.x=pecinha.x+2
  
  
  
}


if (keyDown('left')){
 pecinha.x=pecinha.x-5
  
  
  
}

if(
   pecinha.isTouching(wa1111)||
   pecinha.isTouching(wa1112)||
  pecinha.isTouching(pecinha1)||
   pecinha.isTouching(pecinha2)||
  pecinha.isTouching(pecinha3)||
  pecinha.isTouching(pecinha4)){

  pecinha.x=40
  pecinha.y=190
  
  count = count + 1
  }
    text('morte:'+ count, 200, 100)
  strokeWeight(0)
    drawSprites()
    
  }





