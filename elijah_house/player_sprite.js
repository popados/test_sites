var canvas2 = document.getElementById('playerArea');
var context1 = canvas2.getContext("2d");


var img = new Image();
img.src = "./images/elijah_spritesheet2.png";

img.onload = function(){


  // context.drawImage(img,0,up,32,32,0,0,32,32);
  // context.drawImage(img,0,left,32,32,0,32,32,32);
  // context.drawImage(img,0,right,32,32,0,64,32,32);
  // context.drawImage(img,0,down,32,32,0,96,32,32);

  init();


}

const width = 32;
const height = 32;

function drawFrame(frameX, frameY, canvasX, canvasY){

  context1.drawImage(img, frameX * width, frameY * height, width, height, canvasX, canvasY, width,height);
}



function init() {
  // drawFrame(0,0,0,0);
  // drawFrame(1,0,width,0);
  // drawFrame(0,0,width*2,0);
  // drawFrame(2,0,width*3,0);
  window.requestAnimationFrame(step);
  document.onkeydown = move;

}

const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
let spriteX = 0;
let spriteY = 0;

function step() {
  frameCount++;
  if(frameCount < 15){
    window.requestAnimationFrame(step);
    return;

  }
  frameCount = 0;
  context1.clearRect(0, 0, width, height);

  drawFrame(cycleLoop[currentLoopIndex], 0, spriteX, spriteY);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(step);
}

function move(e){
  console.log(e.keyCode)
  if(e.keyCode === 68){
    spriteX += 32;
    context1.clearRect(0,0,canvas2.width,canvas2.height);
    drawFrame(cycleLoop[currentLoopIndex], 0, spriteX, spriteY);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
      currentLoopIndex = 0;
    }
  }
  if(e.keyCode === 65){
    spriteX -= 32;
    context1.clearRect(0,0,canvas2.width,canvas2.height);
    drawFrame(cycleLoop[currentLoopIndex], 0, spriteX, spriteY);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
      currentLoopIndex = 0;
    }
  }
  if(e.keyCode === 87){
    spriteY -= 32;
    context1.clearRect(0,0,canvas2.width,canvas2.height);
    drawFrame(cycleLoop[currentLoopIndex], 0, spriteX, spriteY);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
      currentLoopIndex = 0;
    }
  }
  if(e.keyCode === 83){
    spriteY += 32;
    context1.clearRect(0,0,canvas2.width,canvas2.height);
    drawFrame(cycleLoop[currentLoopIndex], 0, spriteX, spriteY);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
      currentLoopIndex = 0;
    }
  }
}

document.onkey










//comments //context.drawImage(
//        srcImage,
//        srcX, srcY, srcWidth,srcHeight,
//        canvasX,canvasY,spriteWidth,spriteHeight);
