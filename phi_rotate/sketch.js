/* 
 * simple p5.js script that draws circles in a pattern
 * and rotates them at a certain angle.
 *
 * inspired from http://blog.matthen.com/post/127400828111/this-spiral-is-rotated-by-the-golden-angle-every
 *
 */

var theta;
var n;
var separation_factor;
var size_factor;
var is_rotating;
function setup() {
  noStroke();
  createCanvas(displayWidth, displayHeight);
  theta = new Big(-2 * PI * (sqrt(5.0)-1) / 2.0);  // golden ratio angle
  angle = new Big(theta);

  n = 83;                               // number of circles
  separation_factor = 0.11; // 1.2 is default
  size_factor = 1.2;  // 0.4 is default
  is_rotating = true;
  frameRate(30);

  angleMode(RADIANS);
}

function draw() {
  background(color(113, 87, 84));
  fill(color(214,115,113));
  for (var i = 0; i < n; i++) {
    // Trippy swirling effect:
    var sq = sqrt(i/separation_factor) * 10;
    // var mouse_x = map(mouseX, 0, width, 1, 40);
    // var mouse_y = map(mouseY, 0, height, 0, 3.14);
    var mouse_x = 35;
    var mouse_y = 0.8; 
    var radius = 0.04 * (130+ pow(i, size_factor)) * sin(i/mouse_x + mouse_y)*4.5;

    //Original effect:
    //var radius = 0.04 * (5 + pow(i, size_factor)) * mouseY / 5;
    //var sq = sqrt(i/separation_factor) * mouseX / 40;
   
    push();
    translate(width/2, height/2);
    scale(0.3);

    if (is_rotating) {
      angle = theta.times(frameCount % 9000);
    } else {
      angle = theta;
    }
    // rotate(-angle);  // rotates inwards
    rotate(angle);
    if (i > 1) {
    	ellipse(sq * sin(theta * i), sq * cos(theta * i), radius, radius);
    }
    pop();
  }

}

function mouseClicked() {
  is_rotating = !is_rotating;
}
