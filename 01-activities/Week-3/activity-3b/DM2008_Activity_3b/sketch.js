// DM2008 — Activity 3b
// (One Function Wonder, 15 min)

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  let x = 0;
  let y= 0;
}

function draw() {
  background(220);
  //fish(width/2, height/2, 75);
  
  let spacing = 100;  
  for (let y = 0; y < height; y += spacing) {
  for (let x = 0; x < width; x += spacing) {
    fish(x + spacing/2, y + spacing/2, 20);
  }
  }
  
 // push();
 // translate(mouseX, mouseY);
  //fish(0, 0, 50);
  //pop();
  
function fish(x, y, h)
  {
    noStroke();
    
    push();
    translate(x, y);
    rotate(radians(-45))
    fill("#00BCD4");
    ellipse(0, 0, 2.5*h, h);
    pop();
    
    push();
    fill("#00BCD4")
    translate(x, y);
    ellipse(-h, 1.3*h, 0.4*h, h);
    ellipse(-1.4*h, h, h, 0.4*h);
    fill("#374261")
    ellipse(0.4*h, -0.4*h, 0.3*h)
    pop();
  }
  

  // TODO 1:
  // Define a function that draws something (a shape or group of shapes).
  // It should take at least one parameter (e.g., position, size, or color).

  // TODO 2:
  // Call your function multiple times with different parameter values.
  // myShape(100, 200, 50);
  // myShape(300, 200, 80);

  // TODO 3:
  // (Challenge) Call your function inside a for loop
  // to create a repeating pattern or variation.
}

// Example starter function:
// function myShape(x, y, s) {
//   ellipse(x, y, s, s);
// }