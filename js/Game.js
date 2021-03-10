class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    //track = createSprite(10,10);
    //track.addImage("bg", Background);
    //track.scale = 2;

    pac1 = createSprite(100,200);
    pac1.addImage("pacman1",pac1_img);
    pac1.scale = 0.06;

    pac2 = createSprite(300,200);
    pac2.addImage("pacman2",pac1_img);
    pac2.scale = 0.06;
    
    pacs = [pac1, pac2];

  }

  play(){
    form.hide();
    //track.velocityX = 3;
    Player.getPlayerInfo();
   // player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(Background);
     // image(track, 100,-displayHeight,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var y = 175 ;
      var x = 175;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y = y + 200;
        x = x + 200;
        //use data form the database to display the cars in y direction
        x = displayHeight - allPlayers[plr].distance;
        y = displayHeight - allPlayers[plr].Ydistance;

        pacs[index-1].x = x;
        pacs[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          pacs[index - 1].shapeColor = "red";
         // camera.position.y = displayWidth/2;
         // camera.position.x = pacs[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

      if (frameCount % 200 === 0){
        ghost = createSprite(displayWidth-50,200,20,20);
        ghost.addImage("ghost", ghostImg1);
        ghost.scale = 0.2;
        
        ghost.y = Math.round(random(90,300));
        
        ghost.velocityX = -10
        ghost.lifetime = 400;
        
        //ghostGroup.add(ghost);
      }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=6
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance -=6
      player.update();
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.Ydistance +=6
      player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.Ydistance -=6
      player.update();
    }
   
    drawSprites();
  }

//  end(){
  //  console.log("Game Ended");
    //console.log(player.rank);
//  }
}
