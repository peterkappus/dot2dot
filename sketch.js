
function setup() {
  //createCanvas(window.innerWidth,window.innerHeight);
  createCanvas(1295,1295);
  fill(0);
}

function mouseClicked() {
  x = mouseX;
  y = mouseY;
  size = 5
  triangle(x-size, y+size, x,y-size, x+size,y+size);
  
  text("hello",x,y)
}
