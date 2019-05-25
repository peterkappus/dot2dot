
var counter = 1;
var pointsClicked = [];
var makingPoints = true;

function setup() {
  //createCanvas(window.innerWidth,window.innerHeight);
  createCanvas(1295,1295);
  fill(0);
  textSize(32);
}

function mouseClicked() {
  x = mouseX;
  y = mouseY;
  
  if(makingPoints) {
    if(counter > 1){
      xDistanceFromStart = (x-pointsClicked[0]['x']);
      yDistanceFromStart = (y-pointsClicked[0]['y']);
      
      if(Math.sqrt(Math.pow(xDistanceFromStart,2) + Math.pow(yDistanceFromStart,2)) < 20) {
        //switch to drawing mode!
        makingPoints = false;
        //beginShape();
        stroke(0);
        strokeWeight(3);
        //reset counter, but start at second point
        counter = 1;
      }else{
        makePoint(x,y);
      }
    }else {
      makePoint(x,y);
    }
  }else{
    //connecting dots
    //if click happens close to the next dot, then make a connection
    currentPoint = pointsClicked[counter];
    previousPoint = pointsClicked[counter-1]
    console.log(currentPoint['x']);
    console.log(distance(mouseX,mouseY,currentPoint['x'],currentPoint['y']));
    if(distance(mouseX,mouseY,currentPoint['x'],currentPoint['y']) < 50) {
      
      //vertex(nextPoint['x'],nextPoint['y']);
      line(previousPoint['x'],previousPoint['y'],currentPoint['x'],currentPoint['y']);
      counter = (pointsClicked.length + (counter + 1)) % pointsClicked.length
    }
  }
}

function makePoint(x,y){
  size = 8;
  triangle(x-size, y+size, x,y-size, x+size,y+size);
  text(counter,x+2,y-2)      
  pointsClicked.push({x:x,y:y});
  counter++;  
}

function distance(x1,y1,x2,y2) {
  return(Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2)));
}
