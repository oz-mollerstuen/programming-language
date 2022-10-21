window.addEventListener("load", function() {
});
 function prevent(event)
  event.preventDefault
  

  
  



function tabulateAnswers() {
  
  
  
  let val1score = 0;
  let val2score = 0;
  let val3score = 0;
  let val4score = 0;
  let val5score = 0;
    
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
  

  var answerbox = document.getElementById('answer');
  if (c1score == maxscore) { 
    answerbox.innerHTML = "Python";
  }
  if (c2score == maxscore) { 
    answerbox.innerHTML = "C#";
  }
  if (c3score == maxscore) { 
    answerbox.innerHTML = "Java";
  }
  if (c4score == maxscore) { 
    answerbox.innerHTML = "JavaScript";
  }
}


function resetAnswer() {
  let answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Who's excited to see?";
}


























