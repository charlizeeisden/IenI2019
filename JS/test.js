var choco;
var torenX = 100;
var torenY = 100;

function setup() {
  canvas = createCanvas(450,450);
  background('white');
  canvas.parent('processing');

}

function preload() {
    choco = loadImage("images/choco.jpg")
    toren = loadImage("images/toren.jpg")
}

function draw() {
  background(choco);
  image(toren,torenX,torenY,250,250);
}