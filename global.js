window.onload = function(){
//  alert("Foo");

//So when a person starts the quiz by pushing the preset button, I need to have the questions come up one at a time. I need the following pieces of information: The questions, the choices, the correct answers, the user's guess, something that says they got it right or got it wrong, a counter for correct answers, a statement that says they got X right out of Y, and a percentage they got right. 

//Seems like the right thing to do to put the questions and answers in some kind of a hash. 
//There is no hash in javascript as far as I can tell. There is an object but I don't know if I can iterate through an object. So an array? Try both? Wish I was smarter about these things.
//Maybe what I need is for the prompt to ask the "key" part of the object and they get it right if the "guess" matches the "value" part of the object. What the hell am I talking about. 

  var questionResults = ["c", "b", "c" ,"a"]

  var questions = ["What is the meaning of life?", "What do we talk about when we talk about love?", "Where is the remote?", "How do we know what we know?"]

  var choices = [
    "a. Karma b. Life is a cereal. c. THIS IS THE CORRECT ANSWER. d. The species must survive long enough to code instructions for how to recreate itself and send the instructions to a parallel universe.",
    "a. Hormones. b. THIS IS THE CORRECT ANSWER. c. Ourselves. d. Ask your mother.",
    "a. Between the couch cushions. b. Cat is sleeping on it. c. THIS IS THE CORRECT ANSWER. d. The remote knows where it is but we are lost.",
    "a. THIS IS THE CORRECT ANSWER. b. We just do. c. We don't really. d. We Google." ]   

var index = 0;
var score = 0;

var questions = document.getElementById("question").innerHTML = (questions[0]);
var choices = document.getElementById("choice").innerHTML = (choices[0]);
var questionResults = document.getElementById("question_result").innerHTML = (questionResults[0]); 
index+=1

document.addEventListener("click", function() {
document.getElementById("begin_button").innerHTML = (questions[0]);
});

//OK SO I add an event Listener, and when it hears the click of 
var button = document.getElementById("submitter").addEventListener("click", function() {
  var answer = document.getElementById("answer").value;

  if (answer == questionResults[index]) {
    alert("Correct! Well done!"); 
    score+=1;
    var percentRight = ((score / question.length)*100)

  } //close the if
  else {
    alert("Sorry, the correct answer is " + questionResults[index] + " . ");
  } //close the else

  if(index == questions.length) {
    
var finalScore = document.getElementById("total_result")
("You completed the quiz with " + score + " answers out of " + question.length + " , or " + percentRight + "%.").
  }
  })

//  var score = 0

 //for (var index = 0; index < questions.length; index+=1) {
//     var userGuess = prompt(question[index] + choices[index]);
//     if (userGuess === answer[index]) {
    
//      alert("Correct! Well done!");
//      score +=1;
//      var percentRight = ((score / question.length)*100);
 //   }//close the if  
//    else {
//     alert("Sorry, the correct answer is " + answer[index] + " . ");
//    } //close the else
//  }//close the for loop

//      alert("You completed the quiz with " + score + " answers out of " + question.length + " , or " + percentRight + "%.")




//THIS COMMENTED OUT SECTION IS THE FUNCTIONING ENGINE FOR PHASE 1. 
//  var score = 0

//  for (var index = 0; index < question.length; index+=1) {
//     var userGuess = prompt(question[index] + choices[index]);
//     if (userGuess === answer[index]) {
    
//      alert("Correct! Well done!");
//      score +=1;
//      var percentRight = ((score / question.length)*100);
 //   }//close the if  
//    else {
//     alert("Sorry, the correct answer is " + answer[index] + " . ");
//    } //close the else
//  }//close the for loop

//      alert("You completed the quiz with " + score + " answers out of " + question.length + " , or " + percentRight + "%.")


//end of window.onload curly bracket


//-----------------------------EXPERIMENTS BELOW

//so what I think I want to do is get the "question" id on the html page and change the content that is in the <p> tag from the content that is there now to question 1. Question 1 is actually the question at index position 0 in the question array. 

//I started making a function because it seemed like I would want repeatable code for showing the user each question and the choices.



//function askQuestions() {
//var question = document.getElementById("question").innerHTML
//for (var i = 0; i < question.length; i++) {
 // setAttribute("p", "question[i]")
  // html += "input type="button" name='" + question[i] + "' value='" + i + "
  //' onclick=\"setValue(this.value);\">" + question[i] + "<br>";
//}







 // var button = document.getElementById("begin_button");

//  button.addEventListener("click", function() {

//    var question = document.querySelectorAll("ul.second_five li");

//    for (var i = 0; i < question.length; i++) {
//      if (question[i].style.display === "block") {
//        question[i].style.display = "none";
//      }
//      else {
//        question[i].style.display = "list-item";
//      }
//    }

//  });


//----------------------------

 //var userName = document.getElementById("full_name"); in case I need this
  

  //var greeting = document.getElementById("greeting");

 // greeting.innerHTML = ("Hail Citizen " + userName.value + " well met!");

 // });//closing curly bracket for the addEventListener open bracket
//};//closing curly bracket for window.onload.






