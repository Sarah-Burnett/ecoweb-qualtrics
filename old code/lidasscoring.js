//not used 

//lidas scoring  move lidas embedded data to top
Qualtrics.SurveyEngine.addOnUnload(function()
{
// no or

var score = Qualtrics.SurveyEngine.getEmbeddedData('score');
console.log(score);
var answer = this.getSelectedChoices();
console.log(answer);
if (answer[0]=="1") {
	score ++;
};
console.log(score);
Qualtrics.SurveyEngine.setEmbeddedData('score', score);
var fish = Qualtrics.SurveyEngine.getEmbeddedData('score');
console.log(fish);

// lidas first question

var last = Qualtrics.SurveyEngine.getEmbeddedData('last');
var score = Qualtrics.SurveyEngine.getEmbeddedData('score');
console.log(score);
var answer = this.getSelectedChoices();
console.log(answer);
if (answer[0]=="1") {
	score ++;
	var last = "sad";
};
console.log(score);
Qualtrics.SurveyEngine.setEmbeddedData('score', score);
Qualtrics.SurveyEngine.setEmbeddedData('last', last);
var fish = Qualtrics.SurveyEngine.getEmbeddedData('last');
console.log(fish);

// lidas second question

var last = Qualtrics.SurveyEngine.getEmbeddedData('last');
console.log(last);
var score = Qualtrics.SurveyEngine.getEmbeddedData('score');
console.log(score);
var answer = this.getSelectedChoices();
console.log(answer);
if (answer[0]=="1" && last!="sad") {
	score ++;
	var last = "sad";
};
console.log(score);
Qualtrics.SurveyEngine.setEmbeddedData('score', score);
Qualtrics.SurveyEngine.setEmbeddedData('last', last);
var fish = Qualtrics.SurveyEngine.getEmbeddedData('last');
console.log(fish);

});
