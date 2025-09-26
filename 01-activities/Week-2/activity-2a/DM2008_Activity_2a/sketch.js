//hold down button and press 1 2 or 3

let bg;
let body;
let x = 0;

function setup() {
  createCanvas(400, 400);
  bg = 220;
  body = color(62, 89, 67)
}

function draw() {
  background(bg);
  if (x > width + 100) 
  {
    x = 0;
  }
  
  strokeWeight(3);
  
  //body
  fill(body);
  rect(x, height/2, 200, 140, 40);
  rectMode(CENTER);
  
  //eyes
  fill(255);
  ellipse(x - 30 , height/3, 60);
  ellipse(x + 70, height/3, 60);
  
  //button
  fill(166, 48, 40);
  ellipse(350, 350, 100);
  line(360, 320, 340, 350);
  line(340, 350, 360, 350);
  line(360, 350, 340, 380);
 
  if(mouseX < width/2 || mouseY < height/2)
    {
      x += 2;
      
      //mouth
      fill(181, 107, 87);
      rect(x, height/2, 150, 30, 10);
      rectMode(CENTER);
      
      //pupils
      fill(0)
      ellipse(x - 30, height/3, 40);
      ellipse(x + 70, height/3, 40);
    }
  else
    {
      x += 4;
      fill(181, 107, 87);
      rect(x, height/2, 50, 50, 10);
      rectMode(CENTER);
      
      //pupils
      fill(0);
      ellipse(x -20 , height/3 + 10, 40);
      ellipse(x + 80, height/3 + 10, 40);
      
      strokeWeight(10);
      stroke(255, 217, 0);
      line(360, 320, 340, 350);
      line(340, 350, 360, 350);
      line(360, 350, 340, 380);
 
      stroke(0)
    }
  
    if ( keyIsPressed && mouseIsPressed ) {
      strokeWeight(10)
      stroke(255, 217, 0);

    switch (key) {
      case '1':
      body = color(255, 0, 0);
      break;
    case '2':
      body = color(0, 200, 100);
      break;
    case '3':
      body = color(0, 150, 255);
      break;
    default:
      body = color(62, 89, 67);
  }
      
}
  
}