var ghost, pac1_img ,pac1, pac2, Background, track, fireball1, fireball2, fireball3

var database, player, playerCount, allPlayers, game, form

var gameState = 0
var PLAY = 1
var END = 2

var pacs

var ghostImg1, fireImg1, fireImg2

function preload(){
    pac1_img = loadImage("images/PacMan.png");
    
    Background = loadImage("images/Background.jpg");

    ghostImg1 = loadImage("images/Ghost1.png");

    fireImg1 = loadImage("images/fireball1.png");
    fireImg2 = loadImage("images/fireball2.png");
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