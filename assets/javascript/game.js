		$(document).ready(function(event){
				var crystals = "";
				var score;
				var wins = 0;
				var losses = 0;
				

				var randomNumber = (function(min, max){
					return Math.round(Math.random() * (max - min) + min);
				});

				var rand = randomNumber(19,120);
				console.log(rand);

				$("#random").append(rand);	

				var crystalVal = randomNumber(1,12); 
				$('#button1').val(randomNumber(1,12));
			    $('#button2').val(randomNumber(1,12));
			    $('#button3').val(randomNumber(1,12));
			    $('#button4').val(randomNumber(1,12));

			    var refresh = function(event){
			    	score = 0;
			    	rand = randomNumber(19,120);
			    	crystalVal = randomNumber(1,12);
			    	$('#random').empty();
			    	$('#random').append(rand);	
					$('#button1').val(randomNumber(1,12));
				    $('#button2').val(randomNumber(1,12));
				    $('#button3').val(randomNumber(1,12));
				    $('#button4').val(randomNumber(1,12));

			    }
    
			    var score = 0;
			     $('button').click(function(){
			        score = Number(score) + Number($(this).val());
			        $('#score').text("Your total score is: "+score) + "<br>";
			        if (rand == score) {
						wins+=1;
						alert("Congrats, YOU WIN !");
						$("#wins").empty();
						$("#wins").append("Wins: " + wins);
						refresh();

						console.log("wins = " + wins);
					}	
					else if (rand < score) {
						losses+=1;
						alert("YOU LOSE!!!");
						$("#losses").empty();
						$("#losses").append("Losses: " + losses);
						console.log(losses);
						refresh();
					}

					
			     });

});