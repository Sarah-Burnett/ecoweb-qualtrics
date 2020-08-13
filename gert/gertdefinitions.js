// baseline
Qualtrics.SurveyEngine.addOnload(function()
{
    this.questionclick = function(){
        var definitions = document.getElementById("definitions");
        definitions.style.display == "none" 
        ? definitions.style.display = "block" 
        : definitions.style.display = "none"; 
	}
});

// follow ups need to adjust for language
Qualtrics.SurveyEngine.addOnload(function()
{
    this.questionclick = function(){
        var definitions = document.getElementById(/* add */);
        definitions.style.display == "none" 
        ? definitions.style.display = "block" 
        : definitions.style.display = "none"; 
	}
});
