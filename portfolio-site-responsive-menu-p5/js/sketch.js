let canvas;
let lox = 0;
let loy = 0;
let easing = .01



function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);

    canvas.style("z-index", -2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();


    lox = lox + ((mouseX - lox) * easing);
    loy = loy + ((mouseY - loy) * easing);

    dots2(lox, loy);

}



// function dots(_x, _y) {
//     strokeWeight(0);
//     fill(random(200, 255), random(200, 255), random(200, 255));
//     // ellipse(_x, _y, 30, 30);

//     syphil(_x, _y);
// }


function dots2(_x, _y) {
    push();
    translate(_x, _y);
    syphil();
    pop();
}







function syphil() {
  push();

  rearpaws();

  body();

  frontpaws();

  propellerhat();

  head();

  unibrow();

  snout();

  pop();
}


function rearpaws(){
  //rearpaws;
  push();
  fill(38, 28, 23);
  ellipse(-20, 160, 12.5, 25);
  ellipse(70, 160, 12.5, 25);
  pop();
}

function body(){
  //body
  fill(241, 233, 218);
  noStroke();
  ellipse(25, 100, 150, 150);
}

function frontpaws(){
    //front paws
    push();
    fill(220, 200, 180);
    ellipse(-35, 120, 25, 50);
    ellipse(85, 120, 25, 50);
    pop();
}




function head(){
    //head241, 233, 218
    push();
    fill(241, 233, 218);
    stroke(1);
    rect(0,0,50,150);
    rect(-49,-55,50,75);
    rect(49,-55,50,75);
    pop();
}

function propellerhat(){

  push();
  noStroke();
 
  fill ('red');
  circle(25,0,50);
  fill('black');
  rect(22, -34, 5, 10);
  fill (52, 228, 234);
  ellipse(17, -34, 15, 5);
  ellipse(32, -34, 15, 5);
  pop();
}



function scalp(){
    //scalp / hat
    push();
    noStroke();
    circle(25, 0, 50);
    pop();
}


function unibrow (){
    push();

    fill(0);
    rect(-50, 55, 150, -20);
    fill(255);
    square(-50, 55, 50);
    square(50, 55, 50); 
    fill(0);
    square(-50, 55, 20);
    square(50, 55, 20);
    
    pop();
}





function snout(){
  push();
  //snout
  fill(0);
  square(12.5, 125, 25);

  pop();
}