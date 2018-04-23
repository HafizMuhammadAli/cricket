var team1Score = 0;
var team2Score = 0;
var ball=0;
var out=0;
var showScore1 = document.getElementById("score");
var teamARuns = document.getElementById("runs");
var teamBRuns =  document.getElementById("runs2");
var showScore2 = document.getElementById("score2"); 
var toTheEndOfTheOver1 = document.getElementById("endOfTheMatch1");
var toTheEndOfTheOver2 = document.getElementById("endOfTheMatch2");
var result = document.getElementById("results");
var button = document.getElementById("button");



function psl(){
    var randomnumber = Math.floor(Math.random()*7);
    
    if(ball<12){
       
        if(ball<=10){
            if(out===2){
                alert("Team A ALL PLAYERS  Are Out.");
                ball=11;
                }
            else if(randomnumber===randomnumber && randomnumber!==0){
                team1Score += randomnumber;
                teamARuns.innerHTML=randomnumber;
              
                ball +=1;
            }
            else if(randomnumber===0){
                teamARuns.innerHTML=randomnumber;
                ball+=1;
                alert("Your Player Is Out");
                out +=1
            }
           
        }
        else if(ball===11){
            team1Score += randomnumber;
            teamARuns.innerHTML=randomnumber;
                ball +=1;
                
                showScore1.innerHTML=team1Score;
                toTheEndOfTheOver1.innerHTML="<br><br>Team A has Completed over with " + out + " wickets<br> Team A Targeted:" + (team1Score + 1);
                button.innerHTML="Click to Start The Match Of  Team B";
                return false;
            }
            
            showScore1.innerHTML=team1Score + "/" + out;
         }
    else if(ball<26 && ball>11){
        if(ball === 12){
            button.innerHTML="Team B";
             ball +=1;
             out=0;
        }
        else if(ball >=13 && ball<25){
                if(out===2){
                alert("Team B Both Players Are Out.");
                ball=25;
                }
                else if(randomnumber===randomnumber && randomnumber!==0){
                      team2Score += randomnumber;
                      teamBRuns.innerHTML = randomnumber;
                      ball +=1;
                  }
               else{
                teamBRuns.innerHTML=randomnumber;
                ball+=1;
                out +=1;
                alert(" Your Player Is Out");
                  }
         }
        else if(ball===25){
           toTheEndOfTheOver2.innerHTML="<br><br>Team B has Match completed with " + out + " wickets <br> Team B runs ARE: " + (team2Score);
                   var winner ;
               if(team1Score>team2Score){
                    result.innerHTML= "Team A beats Team B by " + (team1Score-team2Score) + " Runs";
                    
                  }
                else if(team2Score>team1Score){
                     result.innerHTML= "Team B beats Team A by " + (team2Score-team1Score) + " Runs";
                    
                 }
                 
             playAgain.innerHTML="Wants To Play Again?";
             button.innerHTML="Click Here";
             ball +=1;
             return false;
          }
    showScore2.innerHTML=team2Score + "/" + (out);
    
    }
    else if(ball === 26){
        window.location.reload();
    }

    return false;   
}