var canvasWidth = 96;
var canvasHeight = 32;
var spriteWidth = 96;
var spriteHeight = 32;
var rows = 1;
var cols = 4;
var trackRight =0;
var trackLeft = 1;
var width = spriteWidth/cols;
var height = spriteHeight/rows;
var curFrame = 0;
var frameCount = 3;
var x =0;
var y =0;
var srcX=0;
var srcY=0;
var left = false;
var right = true;
var speed = 1;

var canvas = document.getElementById('canvas');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext("2d");

var character = new Image();

character.src = "./images/elijah_down.png"

function updateFrame(){

  curFrame = ++curFrame % frameCount;
  srcX = curFrame * width;
  ctx.clearRect(x,y,width,height);
}

function draw() {
  updateFrame();
  ctx.drawImage(character, srcX, srcY, width, height, x,y, width,height);
}
//ctx.scale(10,10);
setInterval(draw, 100);
