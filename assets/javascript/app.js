score = 0;

$(document).ready(function() {
    $("#startBtn").click(function(){
        var number = 60;
        var intervalId;
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
          }

        $("#startBtn").on("click", start); 
        function start(){
            counter = setInterval(timer, 1000);
        }
        function decrement() {
            number--;
        }
        function timer(){
          number--;
          $("#show-timer").html("<h2>" + number + "</h2>" );
          if (number === 0){
            alert("Times Up!")
            stop();
          }
        }
        function stop(){
            clearInterval(counter);
        }
        function finish(){
            number = 1; 
            clearInterval(counter); 
            timer();
        }
        
    });
  });

function submitAnswers(){
    var total = 10;
    


var q1 = document.forms["triviaForm"]["q1"].value;
var q2 = document.forms["triviaForm"]["q2"].value;
var q3 = document.forms["triviaForm"]["q3"].value;
var q4 = document.forms["triviaForm"]["q4"].value;
var q5 = document.forms["triviaForm"]["q5"].value;
var q6 = document.forms["triviaForm"]["q6"].value;
var q7 = document.forms["triviaForm"]["q7"].value;
var q8 = document.forms["triviaForm"]["q8"].value;
var q9 = document.forms["triviaForm"]["q9"].value;
var q10 = document.forms["triviaForm"]["q10"].value;

for (i = 1; i <= total; i++){
    if(eval("q" + i) == null || eval ("q" + i) == ""){
        alert("You did not answer the question " + i);
        return false;
        
    }
}


var answers = ["d","b","c","a","b","b","c","a","d","d"];

for(i = 1; i <= total;i++){
    if(eval("q" + i) == answers[i - 1]) 
        score++;
    console.log(score);
}

var results = document.getElementById("results");
results.innerHTML = "<h3>You answered <span>"+score+"</span> out of <span> "+total+"</span></h3>";

alert("You answered "+score+" correct");

return false;
}




