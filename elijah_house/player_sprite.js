var img = new Image();
img.src = "./images/elijah_spritesheet2.png";

img.addEventListener('load', function(){

  ctx.drawImage(img,0,0);

},false);
