// let's say we have the following prequisites
var canvas2 = document.getElementById('playerArea');
var ctx1 = canvas2.getContext("2d");

let img = new Image();


img.src = "images/Inside_A5.png";
img.onload = function() {
  init();

}

var obj = {
    spriteSheet: {
        //image: img,
        width: 256,
        height: 512,
    },
    width: 32,
    height: 32,
};

function sliceAndDrawSprite(obj, ctx, index, dx, dy, dWidth, dHeight) {
    // dWidth and dHeight are optional, can be used to scale the image on the canvas
    // otherwise it's using the size of the object
    dWidth = typeof dWidth == 'undefined' ? obj.width : dWidth;
    dHeight = typeof dHeight == 'undefined' ? obj.height : dHeight;

    // accumulate the meta data for the spritesheet dynamically
    let columns = Math.floor(obj.spriteSheet.width / obj.width);
    var rows    = Math.floor(obj.spriteSheet.height / obj.height);
    ctx1.drawImage(img,
       index % columns * obj.width,
        Math.floor(index/columns)%rows*obj.height,
         obj.width,
          obj.height,
           dx,dy,dwidth,dheight);
         }

function init(){
  console.log(obj.spriteSheet.width / obj.width);
  console.log(obj.width);
  sliceAndDrawSprite(obj,ctx1,3,0,0);
  //sliceAndDrawSprite(obj.SpriteSheet.img, ctx1,13,32,32);
  //sliceAndDrawSprite(img,ctx1,3,0,0);

}

//     //
//     ctx.drawImage(
//         obj.spriteSheet.image,
//         index % columns * obj.width, // modulus operator %, it will keep index in the range of 0 to the column count
//         Math.floor(index / columns) % rows * obj.height // how often does the index wrap around? that's the row count
//         obj.width,
//         obj.height,
//         dx,
//         dy,
//         dWidth,
//         dHeight
//     );
// }

// usage
// sliceAndDrawSprite(
//     obj, // object structured like on top
//     ctx, // canvas context
//     10,  // sprite index
//     100, // x position on canvas
//     50   // y position on canvas
// );
