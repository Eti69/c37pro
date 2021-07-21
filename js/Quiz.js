class Quiz {
  constructor(){}

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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();


    //write code to change the background color here
    background("yellow")
    //write code to show a heading for showing the result of Quiz
     var x=createElement("h1");
     x.html("Quiz Results");
     x.position(350,30);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    
    if(allContestants!==undefined){
      fill("blue");
      textSize(20);
    

   

    //write condition to check if contestantInfor is not undefined
    
    //write code to add a note here
    text("Note: The Contestant who answered correctly is highlited in green!",130,230);
    }


    for(var plr in allContestants){
      var correctAns="2";
      var display_pos=300;
      if(correctAns===allContestants[plr].answer){
        fill("green");
      }

      else{
        fill("red");
      }
    display_pos+=30;
    textSize(15);
    text(allContestants[plr].name+": " + allContestants[plr].answer,300,display_pos);
     
    }
    
  }
}