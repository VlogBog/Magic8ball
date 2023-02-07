$(document).ready(function() {

  var magic8Ball = {};
  magic8Ball.listOfAnswers = ["Не", "Да", "Може би"];

  $("#answer").hide();

  magic8Ball.askQuestion = function(question) {

    $("#8ball").effect("shake");

    $("#answer").fadeIn(1000);

    var randomNumber = Math.random();

    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;

    var randomIndex = Math.floor(randomNumberForListOfAnswers);

    var answer = this.listOfAnswers[randomIndex];

    $("#answer").text(answer);

    console.log(question);
    console.log(answer);
  };

  var onClick = function() {

    $("#answer").hide();

    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");


    setTimeout(function(){
      var question;
      magic8Ball.askQuestion(question);
    }, 500);


  };

  $("#questionButton").click(onClick);

});
