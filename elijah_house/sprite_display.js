var canvas2 = document.getElementById('playerArea');
var context1 = canvas2.getContext("2d");


var img = new Image();
img.src = "./images/Inside_A5.png";

// var sprite = {}
//
// var width =32;
// var height = 32;

var obj = {
    spriteSheet: {
        image: img,
        width: 256,
        height: 512,
    },
    width: 32,
    height: 32,
};

img.onload = function (){
  alert(this.width + 'x' + this.height);

  init();

}

function init(){

  context1.drawImage(img, 0,0,256,512,0,0,256,512);
  //create a loop that cycles through
  //the sprite sheets I have so i can start creating an array + index values

  //context.drawImage(img,0,0,32,32,0,0,32,32);


  //(sourceImage,sourceX, sourceY, spiteWidth,spiteHeight,canvasX,canvasY,spriteWidth,spirteHeight )
  // context.drawImage(img,0,0,32,32,0,0,32,32);
  // context.drawImage(img,32,0,32,32,32,0,32,32);
  // context.drawImage(img,0,0,32,32,64,0,32,32);
  // context.drawImage(img,64,0,32,32,96,0,32,32);
  // context.drawImage(img,0,0,32,32,0,32,32,32);
  // context.drawImage(img,0,0,32,32,0,64,32,32);

//15 * 32 = 480

  // console.log(typeof width);


}

function drawEachFrame (sourceX,sourceY,canvasX,canvasY){
  context1.drawImage(img, sourceX * width,sourceY*height,width,height,canvasX,canvasY,width,height)

}

function drawIndex(){

}


// const y_index = [];
// for (let i = 0; i <=15;i++){
//   y_index.push(i);
// }

// console.log(y_index);
//
// function drawRowX(){
//   for(let j = 0; j <= 256;j+=32){
//   for (let i = 0; i <=15;i++){
//     if(i<15){
//       drawEachFrame(0,i,j,0);
//     }
//
// }
// }
// }


// function sliceAndDrawSprite(obj, canvas1, index, dx, dy, dWidth, dHeight) {
//     // dWidth and dHeight are optional, can be used to scale the image on the canvas
//     // otherwise it's using the size of the object
//     dWidth = typeof dWidth == 'undefined' ? obj.width : dWidth;
//     dHeight = typeof dHeight == 'undefined' ? obj.height : dHeight;
//
//     // accumulate the meta data for the spritesheet dynamically
//     var columns = Math.floor(obj.spriteSheet.width / obj.width);
//     var rows    = Math.floor(obj.spriteSheet.height / obj.height);
//
//     context1.drawImage(
//         obj.spriteSheet.img,
//         index % columns * obj.width, // modulus operator %, it will keep index in the range of 0 to the column count
//         Math.floor(index / columns) % rows * obj.height, // how often does the index wrap around? that's the row count
//         obj.width,
//         obj.height,
//         dx,
//         dy,
//         dWidth,
//         dHeight
//     );
// }

// usage
