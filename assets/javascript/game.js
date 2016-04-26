$(document).ready(function(event){
				var crystals = "";
				var score;
				var wins = 0;
				var loses = 0;
				var counter;

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
    
			    var score = 0;
			     $('button').click(function(){
			        score = Number(score) + Number($(this).val());
			        $('#score').text("Your total score is:"+score) + "<br>";
			        if (rand == score) {
						wins++;
						alert("Congrats, YOU WIN !");
						$("#wins").append("Wins = " + wins);
						console.log("wins = " + wins);
						// location.reload();
					}	
					else if (rand < score) {
						loses++;
						alert("YOU LOSE!!!");
						$("#loses").append("Loses = " + loses);
						console.log("loses = " + loses);
						// location.reload();
					}

					var html = "<p>Click any crystal to start playing</p>" + "<br><p>wins = " + wins + "<br><p>Loses = " + loses;

			     $('#game').html(html);

					
			     });

			     // var html = "<p>Click any crystal to start playing</p>" + "<br><p>wins = " + wins + "<br><p>Loses = " + loses;

			     // $('#game').html(html);
				
					// console.log("wins = " + wins);
					// console.log("loses = " + loses);
					
					// $("#wins").html = "Wins = " + wins;

					// $("#loses").html = "Loses = " + loses;


});

			