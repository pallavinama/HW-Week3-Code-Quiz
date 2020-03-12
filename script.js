console.log("Test");
var btn = document.createElement("Button");
btn.innerHTML = "Start Quiz"
console.log(btn.innerHTML);
document.body.appendChild(btn); 


var questionCounter = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

var questions = [
    {
       "question":"Commonly used data types DO NOt include:",
       "a":"Alerts",
       "b":"Strings",
       "c":"Booleans",
       "d":"Numbers",
       "correct":"A"
    },
    {
        "question":"The Condition in an if/else statement is enclosed within ____",
        "a":"Quotes",
        "b":"Paranthesis",
        "c":"Curly Brackets",
        "d":"Square Brackets",
        "correct":"B"
     },
     {
        "question":"Arrays in Javascript can be used to store ____",
        "a":"Numbers & Strings",
        "b":"Other Arrays",
        "c":"All",
        "d":"Boolean",
        "correct":"C"
     },
     {
        "question":"String values must be enclosed within ____when being assigned to variables",
        "a":"Commas",
        "b":"Curly Brackets",
        "c":"Paranthesis",
        "d":"Quotes",
        "correct":"D"
     }, 
     {
        "question":"A very useful tool used during development and debugging for printing content to the debugger is:",
        "a":"Console.log",
        "b":"Javascript",
        "c":"Terminal/ Bash",
        "d":"For Loops",
        "correct":"A"
     }
    ];
var question;

btn.addEventListener("click",buildQuiz);

function buildQuiz(){
    var quizContainer = document.getElementById("quiz");
    question = questions[questionCounter];
    quiz.innerHTML = "<h3>"+question.question+"</h3>";
    quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+question.a+"<br>";
    quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+question.b+"<br>";
    quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+question.c+"<br>";
    quiz.innerHTML += "<input type='radio' name='choices' value='D'> "+question.d+"<br>";
    quiz.innerHTML += "<button onclick='submitAnswer()'>Submit Answer</button>";
}

function submitAnswer(){
    var choices = document.getElementsByName("choices");
    var choice;
    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
          choice = choices[i].value;
        }
    }
    if (choice == question.correct){
        correctAnswers = correctAnswers + 1;
    }else{
        incorrectAnswers = incorrectAnswers + 1;
    }

    questionCounter++;
    if (questionCounter == 5){
        questionCounter = 0;
        quiz.innerHTML += "<br>Thanks for attending the quiz. <p>correct answers "+correctAnswers+" incorrectAnswers "+incorrectAnswers+"</p>";
    }else{
        buildQuiz();
    }
}


