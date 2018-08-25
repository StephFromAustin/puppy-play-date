  // READYS FUNCTION 
$( document ).ready(function(){
  // RANDOM NUMBER GENERATOR 
  let Random=Math.floor(Math.random()*100+10)
  
        // DISPLAY THE RANDOM NUMBER ((** WRITE HTML? FIND FIX!! TEXT?))
  $('.numberToMatch').text(Random);
  
  // RANDOM NUMBER FOR PUPPY GENERATOR 
  let num1= Math.floor(Math.random()*10+1)
  let num2= Math.floor(Math.random()*10+1)
  let num3= Math.floor(Math.random()*10+1)
  let num4= Math.floor(Math.random()*10+1)
  
  // VARIABLES!!!!!! Set these first at the beinning or else wont work, not sure why? RESEARCH!!!!!!!
        // SETS TOTALS, WINS, AND LOSSES VARIABLES
  let playerTotal= 0; 
  let wins= 0;
  let losses = 0;
  
        // DISPLAY THE VARIBALES 
$('.wins').text(wins);
$('.losses').text(losses);

// GAME RESET
function reset(){
      Random=Math.floor(Math.random()*50+15);
      console.log(Random)
      $('.numberToMatch').text(Random);
      num1= Math.floor(Math.random()*10+1);
      num2= Math.floor(Math.random()*10+1);
      num3= Math.floor(Math.random()*10+1);
      num4= Math.floor(Math.random()*10+1);
      playerTotal= 0;
          // DISPLAY 
      $('.totalScore').text(playerTotal);
      } 

// DISPLAY WINS! 
function winner(){
alert("You did it! Winnie Thanks You!!!");
  wins++; 
  $('.wins').text(wins);
  reset();
}

// DISPLAY LOSS :( 
function loser(){
alert ("You loss, Winnie is sad");
  losses++;
  $('.losses').text(losses);
  reset()
}

// PUPPY PICTURE CLICKS! NEEDS TO BE IF/ELSE STATEMENTS (CORRECT!) 
  $('.bulldog').on ('click', function(){
    playerTotal = playerTotal + num1;
    console.log("New playerTotal= " + playerTotal);
    $('.totalScore').text(playerTotal); 
          // WIN AND LOSE CONDITIONS!!!!!!
        if (playerTotal == Random){
          winner();
        }
        else if ( playerTotal > Random){
          loser();
        }   
  })  
  $('.corgi').on ('click', function(){
    playerTotal = playerTotal + num2;
    console.log("New playerTotal= " + playerTotal);
    $('.totalScore').text(playerTotal); 
        if (playerTotal == Random){
          winner();
        }
        else if ( playerTotal > Random){
          loser();
        } 
  })  
  $('.dach').on ('click', function(){
    playerTotal = playerTotal + num3;
    console.log("New playerTotal= " + playerTotal);
    $('.totalScore').text(playerTotal);

          if (playerTotal == Random){
          winner();
        }
        else if ( playerTotal > Random){
          loser();
        } 
  })  
  $('.frenchie').on ('click', function(){
    playerTotal = playerTotal + num4;
    console.log("New playerTotal= " + playerTotal);
    $('.totalScore').text(playerTotal); 
      
          if (playerTotal == Random){
          winner();
        }
        else if ( playerTotal > Random){
          loser();
        }
  });   
}); 