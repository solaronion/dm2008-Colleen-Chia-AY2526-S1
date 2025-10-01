// DM2008 – Activity 5a
// Colliding Circles (30 min)

let balls = [];


function setup() {
  createCanvas(400, 400);

  // Step 1: create two Ball objects (DONE)
  for(let n = 0; n < 4; n++)
  {
  balls.push(new Ball(random(width), random(height)));
  }
 
    
  shapeColor = color(76, 52, 200)
}

function draw() {
  background(250 , 0);

  // Step 2: update and display each ball (DONE)
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.show();
    
  // Step 3: check collisions
  // Use dist() between ball centers
  // Trigger feedback (color, bounce, etc.)
    balls[i].checkCollision(balls);
  }
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.r = random(50 , 80);
    this.vel = createVector(random(-2, 2), random(-2, 2));
  }

  move() {
    this.pos.add(this.vel);
    // DONE: wrap around OR bounce off edges
    if (this.pos.x < -this.r) {this.pos.x = width + this.r;}
    if (this.pos.x > width + this.r) {this.pos.x = -this.r;}
    if (this.pos.y < -this.r) {this.pos.y = height + this.r;}
    if (this.pos.y > height + this.r) {this.pos.y = -this.r;}
  }

  show() {
    fill(shapeColor);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  // Step 4: Add a method to checkCollision(others)
  // Use dist() and respond visually
   checkCollision(others) {
    for (let i = 0; i < others.length; i++) {
      // Make sure we do not compare the ball to itself
      if (others[i] !== this) {
        let other = others[i];
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < this.r + other.r) {
         // push();
          //stroke(255);
          //strokeWeight(4);
          //noFill();
          //ellipse(this.pos.x, this.pos.y, this.r * 2); // highlight on collision
          //pop();
          this.vel.x *= -1; // reverse direction
          this.vel.y *= -1;
          shapeColor = color(random(76 , 209), random(52 , 66), random(200, 235))
          //76, 52, 235 // 209, 66, 235
          
        }
      }
    }
   }
}