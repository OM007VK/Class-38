class game{
    constructor()
    {}
getGameState()
{  
  var gamerefence=database.ref("gameState");
    gamerefence.on("value",function(data){gameState=data.val()})
}
update(state)
  {
   database.ref("/").update({gameState :state})

  }
startGame(){
   if (gameState===0) 
   {
    player1 = new player();
    player1.getPlayerCount();
    form1 = new form();
    form1.display();
    
    car1 = createSprite(100,200);
    car2 = createSprite(100,200);
    car3 = createSprite(100,200);
    car4 = createSprite(100,200);
    cars = [car1,car2,car3,car4]
   }

}
  play()
  {
    form1.hideForm()
   
    var index = 0;
    var x =0;
    var y = height;


    player.getPlayerInfo();
    if(allPlayers!==undefined)
    {
     for (var plr in allPlayers) 
     {
       
      cars[index].x = x;
      cars[index].y = y;

      index = index +1;
      y = height - allPlayers[plr].distance;
      x = x+ 200;

        if(index+1 === player1.index)
        {
          cars[index].shapeColor = "red"
          camera.position.y = cars[index].y
        }
       
     
     }
    }

    if(keyIsDown(UP_ARROW) && player1.index !==null)
    {
      player1.distance = player1.distance + 50;
      player1.update();
    }

    drawSprites();
  }
}