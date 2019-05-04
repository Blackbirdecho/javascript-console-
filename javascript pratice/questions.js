(function() {
  function question(questions,answer,corr)
  {
    this.questions = questions;
    this.answer = answer;
    this.corr = corr;
  }
  question.prototype.displayquestion = function() {
    console.log(this.questions);
    for(var i = 0; i < this.answer.length;i++)
    {
      console.log(i + ': ' + this.answer[i]);
    }
  }
  question.prototype.check = function(ans, callback)

  {
    var sc;
   if (ans == this.corr)
   {
     console.log('correct answer!');
     sc = callback(true);
   }
   else {
     console.log('Wrong answer. Try again');
     sc = callback(false);
     }
     this.displayscore(sc);
   }
   question.prototype.displayscore = function(score){
     console.log('Your current score is :' + score);

   }

  var q1 = new question('Is the bar open?',['yes','no'],0);
  var q2 = new question('What the name of this course\'s teacher?',['John','mike','jonas'],1);
  var q3 = new question('what the fuck',['bitch','gay','damn'],2);
function nextquestion(){

  var question = [q1,q2,q3];
  function score(){
    var sc = 0;
    return function(corr){
      if(corr)
      {
      sc++;
    }
    return sc;
    }
  }
  var keepscore = score();
  var n = Math.floor(Math.random()*question.length);
  question[n].displayquestion();
  var answers = prompt('What is your answer');

  if(answers !== 'exit'){
    question[n].check(parseInt(answers), keepscore);
  nextquestion();

}
}
nextquestion();
})();
///asda
