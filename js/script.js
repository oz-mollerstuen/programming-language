window.addEventListener("load", function() {

 function prevent(event) {
  event.preventDefault();
 }
});
function math() {
  let val1score = 0;
  let val2score = 0;
  let val3score = 0;
  let val4score = 0;
  const picks = document.getElementsByTagName('input');

  for (val=0; val<picks.length; val++) {
    if (picks[val].checked) {
      if (picks[val].value == 'val1') {
        val1score = val1score + 1;
      }
      if (picks[val].value == 'val2') {
        val2score = val2score + 1;
      }
      if (picks[val].value == 'val3') {
        val3score = val3score + 1;
      }
      if (picks[val].value == 'val4') {
        val4score = val4score + 1;
      }  
    }
  }

  let maxscore = Math.max(val1score,val2score,val3score,val4score);
  let answerbox = document.getElementById('answer');
  let triviabox = document.getElementById("trivia")
  if (val1score === maxscore) { 
    answerbox.innerHTML = "You should learn Python! Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn’t specialized for any specific problems. This versatility, along with its beginner-friendliness, has made it one of the most-used programming languages today. A survey conducted by industry analyst firm RedMonk found that it was the second-most popular programming language among developers in 2021.";
    triviabox.innerHTML = "Did you know? The name Python comes from Monty Python. When Guido van Rossum was creating Python, he was also reading the scripts from BBC’s Monty Python’s Flying Circus. He thought the name Python was appropriately short and slightly mysterious.";
    document.getElementById("montyp").removeAttribute("class");
  }
  if (val2score === maxscore) { 
    answerbox.innerHTML = "C#";
  }
  if (val3score === maxscore) { 
    answerbox.innerHTML = "Java";
  }
  if (val4score === maxscore) { 
    answerbox.innerHTML = "JavaScript";
  }
}
function redo() {
  let answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Who's excited to see?";
  let triviabox = document.getElementById('trivia');
  triviabox.innerHTML = "Because I know I am";
  document.getElementById("montyp").removeAttribute("class");
}


























