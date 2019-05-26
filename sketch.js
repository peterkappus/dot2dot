
var counter = 1;
var points = [];
var makingPoints = true;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  //createCanvas(1295,1295);
  fill(0);
  textSize(32);
  
  button = createButton('Stop Making Dots');
  button.size(window.innerWidth/2,window.innerHeight/10);
  button.style("background: #fc0")
  button.position(19, 19);
  button.touchStarted(switchMode);
}

function switchMode() {
  button.remove();
  makingPoints = false;
  //beginShape();
  //reset counter, but start at second point
  counter = 1;
  
  stroke(0);
  strokeWeight(3);
  
}

function touchStarted() {
  //alert(mouseX);
  touchHandler();
  return(false);
}

function touchEnded() {
  return(false);
}

function touchHandler() {  
  x = mouseX;
  y = mouseY;
  
  //console.log(counter);
  
  if(makingPoints) {    
    makePoint(x,y);
  }else{
    connectDots();
  }
}

function connectDots() {
  //connecting dots
  //if click happens close to the next dot, then make a connection
  currentPoint = points[counter];
  previousPoint = points[counter-1]
  console.log(currentPoint['x']);
  console.log(distance(mouseX,mouseY,currentPoint['x'],currentPoint['y']));
  if(distance(mouseX,mouseY,currentPoint['x'],currentPoint['y']) < 50) {
    
    //vertex(nextPoint['x'],nextPoint['y']);
    line(previousPoint['x'],previousPoint['y'],currentPoint['x'],currentPoint['y']);
    counter = (points.length + (counter + 1)) % points.length
  }
}

function makePoint(x,y){
  size = 8;
  triangle(x-size, y+size, x,y-size, x+size,y+size);
  text(counter,x+2,y-2)      
  points.push({x:x,y:y});
  counter++;  
}

function distance(x1,y1,x2,y2) {
  return(Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2)));
}
