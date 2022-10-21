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
    answerbox.innerHTML = "You should give C# a GO! C# is a modern, general-purpose programming language that can be used to perform a wide range of tasks and objectives that span over a variety of professions. C# is primarily used on the Windows .NET framework, although it can be applied to an open source platform. This highly versatile programming language is an object-oriented programming language (OOP)—which isn’t very common—and fairly new to the game, yet already a reliable crowd pleaser.";
    triviabox.innerHTML = "In the beginning, C# was originally titled COOL, a clever acronym that stood for “C-like Object Oriented Language.” Unfortunately, Microsoft was unable to hang onto the fun name for reasons having to do with trademark law.C# was originally designed to rival Java. Judging by the quick rise to popularity and the positive response from both new and seasoned developers, it’s safe to say that goal has been achieved."
    document.getElementById("sharp").removeAttribute("class");
  }
  if (val3score === maxscore) { 
    answerbox.innerHTML = "Much like a Monday morning, you should get some Java! Java is one of the most famous and widely used programming languages out there. Millions of devices around the world use it because it is readable and straightforward. Even though Java enjoys such wild popularity, there are some interesting Java facts that you probably did not know about. Here are some things that not many developers are aware of, and you can use to impress your friends and coworkers.";
    triviabox.innerHTML = "If you are familiar with the movie “Shrek,” then you have seen the work of Joe Palrang. However, one can argue that he is more famous for “The Duke” than for Shrek because this mascot is prominently displayed in all JavaOne conferences which are very popular among developers."
    document.getElementById("duke").removeAttribute("class");
  }
  if (val4score === maxscore) { 
    answerbox.innerHTML = "JavaScript for the WIN! JavaScript is essential to the web. If you want to do any kind of web development, you will likely need to use JavaScript. But, it’s also a very useful language outside of the web browser. If you’re familiar with JavaScript, you can use it to build all kinds of applications. If you still need more convincing, the 2020 Stack Overflow Developer Survey lists the median salary for a JavaScript developer in the US at $112k a year. So, if you’re looking to learn a programming language that’s powerful, versatile, and cloud-ready, JavaScript is a great choice.";
    triviabox.innerHTML = "JavaScript is completely different from the language Java. Java was very popular at that time, hence a “younger brother” of Java was the position it was considered to take. Given these points, the interesting fact is that, it has no relation with Java at all. Also, JavaScript was written in only TEN DAYS!"
    document.getElementById("jsm").removeAttribute("class");
  }
}
function redo() {
  let answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Who's excited to see?";
  let triviabox = document.getElementById('trivia');
  triviabox.innerHTML = "Because I know I am";
  document.getElementById('montyp').style.display='none';
  document.getElementById('sharp').style.display='none';
  document.getElementById('duke').style.display='none';
  document.getElementById('jsm').style.display='none';
}


























