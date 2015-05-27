$(document).ready(function(){

    // Display Game Information Modal
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

    // Hide Game Information Modal
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    // Compare Between Functions
    function between(x, min, max) {
      return x >= min && x <= max;
    }
  
    // Random Number Generator between 1 and 100
    var randomInt = Math.floor((Math.random()*100)+1);

	// Creates a New Game
    $("a.new").click(function(e){
      e.preventDefault();
      randomInt = Math.floor((Math.random()*100)+1);
      $('#feedback').text('Make a Guess!');
      $('#count').text(0);
      $('#guessList').html('');
      $('#userGuess').val('');
    })

    // Guess Click Event
    $('#guessButton').click(function(e){
      e.preventDefault();

      // Stores User Input in a variable
      var value =  parseInt($('#userGuess').val());

      // Validates Number
      if(isNaN(value)) {
         $('#feedback').text('Please enter a number');
        return;
      }

      // Over 100
      if(value > 100) {
        $('#feedback').text('Enter a number under 100');
        return;
      }

      // Under 0
      if(value < 0) {
        $('#feedback').text('A number over 0 is needed');
        return;
      }
      
      // Add to Guesslist 
      $('#guessList').append( "<li>" + value + '</li>');

      // Validate Answer
      if(value === randomInt) {
        $('#feedback').text('You Gueesed the Number! ' + value);
        return;
      }

      // Between 5 (Fire)
      else if(between(value, (randomInt - 5), (randomInt + 5))) {
        $('#feedback').text('Getting Really Hot Now');
        return;
      }

      // Between 10 (Hot)
      else if(between(value, (randomInt - 10), (randomInt + 10))) {
        $('#feedback').text('You are Getting Hotter');
        return;
      }

      // Between 20 (Warm)
      else if(between(value, (randomInt - 20), (randomInt + 20))) {
        $('#feedback').text('Getting Warmer Now');
        return;
      }

      // Between 30 (Cool)
      else if(between(value, (randomInt - 30), (randomInt + 30))) {
        $('#feedback').text('You are Cool');
        return;
      }

      // You Are Freezing 
      $('#feedback').text('Totally Freezing');
      return;


    });
});