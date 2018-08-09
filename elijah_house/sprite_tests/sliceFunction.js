
  var ctx = [canvas context];
  var obj = {
      spriteSheet: {
          image: [image object of the spritesheet],
          width: 1100,
          height: 330,
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
      var columns = Math.floor(obj.spriteSheet.width / obj.width);
      var rows    = Math.floor(obj.spriteSheet.height / obj.height);

      ctx.drawImage(
          obj.spriteSheet.image,
          index % columns * obj.width, // modulus operator %, it will keep index in the range of 0 to the column count
          Math.floor(index / columns) % rows * obj.height, // how often does the index wrap around? that's the row count
          obj.width,
          obj.height,
          dx,
          dy,
          dWidth,
          dHeight
      );
  }

  // usage
  sliceAndDrawSprite(
      obj, // object structured like on top
      ctx, // canvas context
      10,  // sprite index
      100, // x position on canvas
      50   // y position on canvas
  );
