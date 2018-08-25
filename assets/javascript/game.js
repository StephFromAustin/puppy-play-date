  // READYS FUNCTION 
$( document ).ready(function(){
  // RANDOM NUMBER GENERATOR 
  let Random=Math.floor(Math.random()*100+10)
  
        // DISPLAY THE RANDOM NUMBER ((** WRITE HTML? FIND FIX))
  $('.numberToMatch').text(Random);
  
  