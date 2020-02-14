// toggle content
Qualtrics.SurveyEngine.addOnload(function()
    {
    this.questionclick = function(button){
		var contentId = document.getElementById("gertes");
        contentId.style.display == "none" ? contentId.style.display = "block" : 
        contentId.style.display = "none"; 
	}
});

// checking embedded data
var lidas = Qualtrics.SurveyEngine.getEmbeddedData("lidas_symptoms_0");
console.log(lidas);

// scoring gert NOPE
Qualtrics.SurveyEngine.addOnUnload(function()
{
score = Qualtrics.SurveyEngine.getEmbeddedData('score');
var input = $(this.questionId).select('Input.Tex') // need to change the input text to account for hotspot q
var answer = input[0].value; // need to edit this for hotspot q
var solution = "${lm://Field/3}"; // need to add solution to loop and merge
if (answer==solution) {
	score ++;
}
Qualtrics.SurveyEngine.setEmbeddedData('score', score);
});

// remove powered by qualtrics //
Qualtrics.SurveyEngine.addOnReady(function() {
	jQuery('#Plug').attr('style', 'display:none !important');
});

//changing emodis size//
Qualtrics.SurveyEngine.addOnReady(function() {
	jQuery('span').attr('style','font-size:larger !important');
	jQuery('li').attr('style','font-size:larger !important');
});

// alert for clicking through final pages UPDATE THIS
var lang = "${e://Field/Q_Language}"
if (lang = EN){
	alert("Please ensure...")
}
else if (lang = DE){
	alert ("Bitte ... ")
}

// toggle info sheet faq
Qualtrics.SurveyEngine.addOnload(function()
{
	jQuery(".heading").click(function(){
		jQuery(this).next(".info").toggle();
	});
});

