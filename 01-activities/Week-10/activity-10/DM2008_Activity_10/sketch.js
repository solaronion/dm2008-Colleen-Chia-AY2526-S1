let repeatSlider, speedSlider, shapeSelect, colorBtn;

let repeatCount = 24;   
let shapeSize = 80;   
let spin = 0;    

function setup() {
  createCanvas(640, 400);
  rectMode(CENTER);
  noStroke();
  textFont("Helvetica, Arial, sans-serif");
  
   shapeColor = color(random(255), random(255), random(255));
 
  // Button: change color
  colorBtn = createButton("Change Color");
  colorBtn.position(255, 180);
  colorBtn.mousePressed(randomShapeColor);
  colorBtn.addClass('btn');

 
  // Slider: controls size
  createP("Size").position(0, 50).style("margin", "4px 0 0 16px");
  speedSlider = createSlider(0, 100, 50, 1);
  speedSlider.position(15, 15);
  speedSlider.addClass('slider');
 
  // Dropdown: choose shape
  createP("Shape").position(0, 100).style("margin", "8px 0 0 16px");
  shapeSelect = createSelect();
  shapeSelect.position(550, 25);
  shapeSelect.option("ellipse");
  shapeSelect.option("rect");
  shapeSelect.option("triangle");
}
  
  
  function randomShapeColor() {
    shapeColor = color(random(255), random(255), random(255));
  }

function draw() {
  background(20);
  fill(255, 180, 60);
  translate(width/2, height/2);
  
  speed = speedSlider.value();
  spin += speed*0.001;

  for (let i = 0; i < repeatCount; i++) {
    push();

    let angle = (TWO_PI / repeatCount) * i + spin;
    rotate(angle);
    translate(150, 0);
 let choice = shapeSelect.value();
  if (choice === "ellipse") {
    ellipse(0, 0, shapeSize, shapeSize);
  } else if (choice === "rect") {
    rectMode(CENTER);
    rect(0, 0, shapeSize, shapeSize);
  } else if (choice === "triangle") {
    triangle(-shapeSize * 0.6, shapeSize * 0.5, 0, -shapeSize * 0.6, shapeSize * 0.6, shapeSize * 0.5);
  }

    pop();
  }
}
