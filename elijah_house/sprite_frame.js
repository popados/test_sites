let img = new Image();

img.src = "./images/elijah_spritesheet2.png";
img.onload = function() {
  init();

}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const scale = 2;

const width = 32;
const height = 32;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * width, frameY * height, width, height,
                canvasX, canvasY, scaledWidth, scaledHeight);

}

function init() {

  //requestAnimationFrame = https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  window.requestAnimationFrame(step);


}

const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  frameCount++;
  if (frameCount < 15) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(step);
}
