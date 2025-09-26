// DM2008 -- Mini Project
// FLAPPY BIRD (Starter Scaffold)

// Notes for students:
// 1) Add flap control in handleInput() (space / ↑ to jump) DONE
// 2) Detect collisions between the bird and pipes → game over DONE
// 3) Add scoring when you pass a pipe DONE
// 4) (Stretch) Add start/pause/game-over states
//     start and game-over DONE

/* ----------------- Globals ----------------- */
let bird;
let pipes = [];
let sky;
let scoreCount = 0;
let blood = [];

let spawnCounter = 0;      // simple timer
let birdCounter = 0;
let flapCounter = 0;

const SPAWN_RATE = 90;     // ~ every 90 frames at 60fps ≈ 1.5s
const PIPE_SPEED = 2.5;
const PIPE_GAP = 120;      // gap height (try 100-160)
const PIPE_W = 40;


let isGamePlaying = true;
let isFlapping = false;
let canPipeMove;
let canSkyMove;
let canBirdFlap;


/* ----------------- Assets ----------------- */
let birdImg;
let birdFlapImg;
let skyImg;
let pipeImg;
let pipeBottomImg;
let pipeTopImg;


function preload(){
  birdImg = loadImage("assets/bird.png");
  birdFlapImg = loadImage("assets/birdflap.png")
  skyImg = loadImage("assets/cloud.png")
  pipeImg = loadImage("assets/pipe.png")
  pipeBottomImg = loadImage("assets/pipebottom.png")
  pipeTopImg = loadImage("assets/pipetop.png")
}

/* ----------------- Setup & Draw ----------------- */
function setup() {
  imageMode(CENTER);
  createCanvas(480, 640);
  gameStart();
}

function gameStart(){
  isGamePlaying = true;
  isFlapping = false;
  canPipeMove = true;
  canSkyMove = true;
  canBirdFlap = true;
  
  noStroke();
  sky = new Sky(width)
  bird = new Bird(120, height / 2);
  
  // Start with one pipe so there's something to see
  pipes = [];
  blood = [];
  scoreCount = 0;
  spawnCounter = 0;
  pipes.push(new Pipe(width + 40));
}



function draw() {
  background(61, 10, 10);
 
  sky.update();
  sky.show();

  if (isGamePlaying === true){
  // 1) read input (students: add flap control here)
  // 2) update world
  score();
  bird.update();
    
  // spawn pipes
  spawnCounter++;
  if (spawnCounter >= SPAWN_RATE) {
    pipes.push(new Pipe(width + 40));
    spawnCounter = 0;

  }

  // update + draw pipes
   for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();
    pipes[i].show();
     
  //score
    if (pipes[i].scored === false) { 
    if (bird.pos.x > pipes[i].x + pipes[i].w) {
    scoreCount = scoreCount + 1;   
    pipes[i].scored = true;        // mark this pipe as counted
    }

     
    // TODO (students): collision check with bird
    // If collision → stop the game or reset (add a game state if you want)
    if (isGamePlaying && (pipes[i].hits(bird) || bird.hitsGround())) 
    {
    console.log("HIT");
    canPipeMove = false;
    canSkyMove = false;
    canBirdFlap = false;
    bird.die();

    //isGamePlaying = false
    }
     
     // remove pipes that moved off screen
    if (pipes[i].offscreen()) 
    {
    pipes.splice(i, 1);
    }
   }
   }
    score();
  // 3) draw bird last so it's on top
   bird.show();
  for (let i = blood.length - 1; i >= 0; i--) {
    blood[i].update();
    blood[i].show();
    }
  
}
  
  else{
    endScore();
  }

}

/* ----------------- Input ----------------- */
function handleInput() {
  // TODO (students): make the bird flap on key press
  // Hints:
  // - In keyPressed(): call bird.flap();
   if (!isGamePlaying) {
            gameStart();
        } else {
            bird.flap();
        }
}

function keyPressed() {
  if(keyCode == 32 ) {
    handleInput();
  }
}


/* ----------------- Classes ----------------- */
class Bird {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 16;              // for collision + draw
    this.gravity = 0.45;      // constant downward force
    this.flapStrength = -6.0; // negative = upward
  }

  applyForce(fy) {
    this.acc.y += fy;
  }

  flap() {
    // instant upward kick
    if (canBirdFlap === true){
        this.vel.y = this.flapStrength;
    isFlapping = true;
    flapCounter++
    if(flapCounter == 2){
      isFlapping = false;
      flapCounter = 0;
    }
  
    }
    
  }
  hitsGround() {
    return this.pos.y > height - 10 - this.r;
  }

  update() {
    // gravity
    this.applyForce(this.gravity);

    // integrate
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    // keep inside canvas vertically (simple constraints)
    if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y = 0;
    }
    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y = 0;
      // TODO (students): treat touching the ground as game over
    }
  }
  
  die() {
  if (birdCounter === 0) { 
    for (let i = 0; i < 12; i++) {   
      let dx = random(-3, 3);
      let dy = random(-3, 3);
      blood.push(new Blood(this.pos.x, this.pos.y, this.r, dx, dy));
    }
  }
    
  birdCounter += 1;
  if (birdCounter == 50) {
    isGamePlaying = false;
    birdCounter = 0;
    }
  }

  show() {
    //fill(255, 205, 80);
    //circle(this.pos.x, this.pos.y, this.r * 2);
    if (!isFlapping){
       image(birdImg, this.pos.x, this.pos.y);      
    }
    else{
      image(birdFlapImg, this.pos.x, this.pos.y);
    }
 
    // (Optional) add a small eye
    //fill(40);
    //circle(this.pos.x + 6, this.pos.y - 4, 4);
  }
}

class Blood {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(10, 20);           
    this.dx = random(-3, 3);           
    this.dy = random(-7, 7);                              
  }
  
  update() {
    this.x += this.dx;
    this.y += this.dy;                 
  }

  show() {
    noStroke();
    fill("#d62d2d");
    ellipse(this.x, this.y, this.r);
  }
 
}


class Sky {
  constructor(x) {
    this.x = x;
    this.speed = PIPE_SPEED/2;
    this.w = 680
    this.h = 212
  }
  
   update() {
    if (canSkyMove === true){
      this.x -= this.speed;
      if (this.x < -this.w){
        this.x = this.w + 680
      }
    }
  
  }
  
  show() {
    imageMode(CENTER);
    image(skyImg, this.x, height/2, this.w*2, this.h*2);
  }
  
}

class Pipe {
  constructor(x) {
    this.x = x;
    this.w = PIPE_W;
    this.speed = PIPE_SPEED;

    // randomize gap position
    const margin = 40;
    const gapY = random(margin, height - margin - PIPE_GAP);

    this.top = gapY;                 // bottom of top pipe
    this.bottom = gapY + PIPE_GAP;   // top of bottom pipe

    this.scored = false; // for scoring once per pipe
  }
  

  update() {
    if (canPipeMove === true){
      this.x -= this.speed;
    }
    
  }

  show() {
    imageMode(CORNER);
    image(pipeImg, this.x, 0, this.w, this.top); //top pipe
    image(pipeImg, this.x, this.bottom, this.w, height - this.bottom);
    image(pipeBottomImg, this.x - 18, this.top - 16); //bone for the top pipe
    image(pipeTopImg, this.x - 18, this.bottom - 15); //bone for the bottom pipe
    //fill(120, 200, 160);
    //rect(this.x, 0, this.w, this.top);                   // top pipe
    //rect(this.x, this.bottom, this.w, height - this.bottom); // bottom pipe
  }

  offscreen() {
    // look at MDN to understand what 'return' does
    // we will learn more about this in Week 6
    return (this.x + this.w < 0);
  }

  // TODO (students): circle-rect collision (simple)
  // 1) Check if bird within pipe's x range.
  // 2) If yes, check if bird.y is outside the gap (above top OR below bottom).
  //    Then it's a hit.
  //
  hits(bird) {
     const withinX = (bird.pos.x + bird.r > this.x) && (bird.pos.x - bird.r < this.x + this.w);
     const aboveGap = bird.pos.y - bird.r < this.top;
     const belowGap = bird.pos.y + bird.r > this.bottom;
     return withinX && (aboveGap || belowGap);
   }
}
  
function score(){
 
  //fill(0, 50);        
  //noStroke();
  //rect(0, 0, width, 50); 
  
  fill(250, 100); 
  textAlign(CENTER); 
  textFont("Comic Sans MS")
  textSize(500); 
  text(scoreCount, width/2, height/2 + 175);
}

function endScore(){
  background(18, 22, 28);
  
  fill(250);
  textAlign(CENTER);
  textSize(50);
  text("YOU DIED :(", width/2, height/2 - 100);

  textSize(35);
  text("Final Score: " + scoreCount, width/2, height/2 - 20);

  textSize(15);
  text("Press SPACE to restart", width/2, height /2 + 25 );
}





