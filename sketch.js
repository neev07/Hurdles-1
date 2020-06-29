var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var database;
var allPlayers;
var score = 0;

var form, player, game;

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    console.log("Please press reset button");
    game.play();
  }
}
