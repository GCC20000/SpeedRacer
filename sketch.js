var canvas;
var backgroundImage;
var bgImg;
var database;
var gameState;
var allPlayers,car1, car2;
var playerCount;
var form, player;
var playerCount;
var track;
var carr1;
var carr2;
var fuell;
var goldcoinn;
var fuels;
var powerCoins;
var obstacle1Image;
var obstacle2Image;
cars = [];
function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  track = loadImage("./assets/PISTA.png")
  carr1 = loadImage("./assets/car1 (1).png")
  carr2 = loadImage("./assets/car2 (1).png")
  fuell = loadImage("./assets/fuel+(1).png")
  goldcoinn = loadImage("./assets/goldCoin.png")
  obstacle1Image = loadImage("./assets/obstacle1+(1).png")
  obstacle2Image = loadImage("./assets/obstacle2+(1).png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);

  if(playerCount===2){
    game.update(1)
  }
  if(gameState===1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
