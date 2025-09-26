// DM2008 — Activity 3b
// (Painting App, 50 min)

// 1) Palette + size
const palette = ["#f06449", "#009988", "#3c78d8", "#1c1f1c"];
let colorIndex = 0;
let sizeVal = 20;

// 2) Brush registry (array of functions)
const brushes = [brushCircle, brushSquare, brushStreak, eraser];
let currentBrush = 0; // 0, 1, 2 or 3

function setup() {
  createCanvas(600, 600);
  background(240);
  rectMode(CENTER);
}

function draw() {
  // paint only while mouse is held
  const col = palette[colorIndex];
  noStroke();
  fill("#333333")
  rect(300, 20, 600, 40)
  fill(col);
  ellipse(20, 20, 20) //colour visualiser

  
  if (mouseIsPressed) {
    // call the selected brush function
    brushes[currentBrush](mouseX, mouseY, col, sizeVal);
    
  }
  showBrushSize();
  showEraserStatus();
}

// 3) Brush functions (students can customize/extend)
function brushCircle(x, y, c, s) {
  noStroke();
  fill(c);
  ellipse(x, y, s);
}

function brushSquare(x, y, c, s) {
  push();
  translate(x, y);
  noStroke();
  fill(c);
  rect(0, 0, s, s);
  pop();
}

function brushStreak(x, y, c, s) {
  stroke(c);
  strokeWeight(max(2, s / 8));
  point(x,y);
  point (x+3, y);
  point(x-3, y);
  point(x, y+3);
  point(x, y-3);
  point(x+3, y+3);
  point(x+3, y+3);
  
}

function eraser(x, y, c, s){
  noStroke();
  fill(color(240));
  ellipse(x, y, s);

}

// 4) Brush UI: select brush, cycle color, change size, clear
function keyPressed() {
  switch (key) {
    case '1':
      currentBrush = 0; // circle
      break;
    case '2':
      currentBrush = 1; // square
      break; 
    case '3':
      currentBrush = 2; // streak
      break;
    case 'e':
      currentBrush = 3; // eraser
  }
  if (key == 'C' || key == 'c') {
    colorIndex = (colorIndex + 1) % palette.length; // cycle color
  }
  if (key == '+' || key == '=') {
    sizeVal += 4;
  }
  if (key == '-' || key == '_') {
    sizeVal = max(4, sizeVal - 4);
  } 
  if (key == 'X' || key == 'x') {
    background(240); // clear canvas
  } 

  
}


function showBrushSize(){
  noStroke();
  textFont('Verdana')
  textSize(20)
  fill('rgb(220,220,220)');
  text('Brush Size:' + sizeVal, 50, 27)
}
  
function showEraserStatus() {
  if (currentBrush === 3) {
    noStroke();
    textFont('Verdana');c
    textSize(20);
    fill('rgb(220,220,220)');
    text('Eraser On', 335, 27);
  }
  // TODO: add an 'E' (eraser) mode by painting with background color - DONE
  // e.g., if eraserMode, use color(240) instead of palette[colorIndex]

}

