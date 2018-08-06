
var canvas = document.getElementById('testArea');
var context = canvas.getContext("2d");


//created a box and function to make one row of 16x16 pixels
var box = {
  boxPixel_X : 0,
  boxPixel_Y : 0,
  global_pixel_X : 32,
  global_pixel_Y : 32,
};
//the object box can be used to init a SpriteImg

//assign grid value to array_index[element]
var one_box = box;
var box_X = one_box.boxPixel_X;
var box_Y = one_box.boxPixel_Y;
var array_values = [];

var y_value = 0;
//draw one row
function drawGrid(){
  // context.beginPath();
  // context.moveTo(32,0);
  // context.lineTo(32,800);
  // context.stroke();
  //

  context.beginPath();
  context.rect(box_X, y_value, 32, 32);
  context.strokeStyle = "rgba(255, 0, 0, 1)";

  context.stroke();
  context.closePath();

}
function drawRow(y_value){
  //console.log(arr_values);
  for (box_X=0; box_X <= 1024; box_X +=32){
    while (box_X <=1024){
      array_values.push(box_X);
      break;
    }
    drawGrid();
  }
}
// draws the rest of the rows with new y values
function drawEachRow(){
  for (y_value = 0; y_value <=720; y_value+=32){

    drawRow(y_value);
  }
}

console.log(array_values);
drawEachRow();

// var player = {
//
//
// };


// for (box_Y= 0; box_Y <= 720; box_Y +=32){
//   arr_values.push(box_Y);
// }


// function drawRow2(y_value){
//   for (box_X= 0; box_X <= 1280; box_X +=16){
//     context.beginPath();
//     context.rect(box_X, y_value, 16, 16);
//     context.strokeStyle = "rgba(0, 50, 255, 1)";
//     context.stroke();
//     context.closePath();
//   }
// }

//drawRow(y_value);
//drawRow2();
// function drawRow2(){
//   for (var box_X; box_X <= 1280; box_X +=16){
//     context.beginPath();
//     context.rect(box_X, 0, 16, 16);
//     context.strokeStyle = "rgba(0, 50, 255, 1)";
//     context.stroke();
//     context.closePath();
//   }
// }
//

// function row_two(){
//   for (box_X; box_X <= 1280; box_X +=16){
//     context.beginPath();
//     context.rect(box_X, 16, 16, 16);
//     context.strokeStyle = "rgba(0, 50, 255, 1)";
//     context.stroke();
//     context.closePath();
//   }
// }

//
// function drawNext(box_Y){
//   for (box_Y; box_Y <= 720; box_Y +=16){
//     drawRow(box_Y);
//   }
// }
// drawNext(box_Y);
// drawRow();
// row_two();
//
// function changeY(){
//   for (box_Y = 16; box_Y <= 720; box_Y +=16){
//     context.beginPath();
//     context.rect(box_X, box_Y, 16, 16);
//     context.strokeStyle = "rgba(0, 50, 255, 1)";
//     context.stroke();
//     context.closePath();
//   }
// }
//
// function draw() {
//   drawRow();
//   changeY();
// }

//draw();
