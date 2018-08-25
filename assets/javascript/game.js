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
  
  