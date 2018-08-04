
var canvas = document.getElementById('testArea');
var ctx = canvas.getContext("2d");

//
var player = {
  xpos : 0,
  ypos : 0,
};

var x_pos = player.xpos;
var y_pos = player.ypos;

function hi (){
  alert("hi");
  ctx.fillStyle = "#0ff";
  ctx.fillRect(x_pos,y_pos,32,32);
}
//maybe add a cooldown for my movement
function move(e){
  console.log(e.keyCode);
  if(e.keyCode === 83){
    y_pos +=32;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawEachRow();
  }
  if(e.keyCode === 68){
    x_pos += 32;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawEachRow();
  }
  if(e.keyCode === 87){
    y_pos -= 32;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawEachRow();

  }
  if(e.keyCode === 65){
    x_pos -= 32;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawEachRow();
  }
  // ctx.fillStyle = "#0ff";
  ctx.fillRect(x_pos,y_pos,32,32);

  // ctx.stroke();
}
hi();
document.onkeydown = move;
//
//
// function update(time = 0){
//   const deltaTime = time - lastTime;
//   lastTime = time;
//   console.log(lastTime);
//
// }
// update();
