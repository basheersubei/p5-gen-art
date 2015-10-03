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

function setup() {
  noStroke();
  createCanvas(displayWidth, displayHeight);
  theta = 2 * PI * (sqrt(5.0)-1) / 2.0;  // golden ratio angle
  n = 500;                               // number of circles
  separation_factor = 1.2;  // 1.2 is default
  size_factor = 0.4;  // 0.4 is default

  frameRate(30);

  angleMode(RADIANS);
}

function draw() {
  background(color(113, 87, 84));
  fill(color(214,115,113));
  for (var i = 0; i < n; i++) {
    //Trippy swirling effect:
    var sq = sqrt(i/separation_factor) * 18;
    var radius = 0.04 * (5 + pow(i, size_factor)) * sin(i/10)*30;
    
    //Original effect:
    //var radius = 0.04 * (5 + pow(i, size_factor)) * mouseY / 5;
    //var sq = sqrt(i/separation_factor) * mouseX / 40;
   
    push();
    translate(width/2, height/2);
    rotate(theta*frameCount);
    ellipse(sq * sin(theta * i), sq * cos(theta * i), radius, radius);
    pop();
  }

}

