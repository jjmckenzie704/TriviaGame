function submitAnswers(){
    var total = 10;
    var score = 0;


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
    if(eval("q" + 1) == answers[i - 1]) 
        score++;
    
}

var results = document.getElementById("results");
results.innerHTML = "<h3>You answered <span>"+score+"</span> out of <span> "+total+"</span></h3>";

alert("You answered "+score+" correct");

return false;
}
