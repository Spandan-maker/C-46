var ghost, pac1_img ,pac1, pac2, Background, track

var database, player, playerCount, allPlayers, game, form

var gameState = 0
var PLAY = 1
var END = 2

var pacs

var ghostImg1

function preload(){
    pac1_img = loadImage("images/PacMan.png");
    Background = loadImage("images/Background.jpg");
    ghostImg1 = loadImage("images/Ghost1.png");
}

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("pink");

    if(playerCount === 2){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
    }

      if(gameState === 2){
        game.end();
      }

    drawSprites();

}