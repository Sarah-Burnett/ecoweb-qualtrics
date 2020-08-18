/* Extra script used on Qualtrics found in the relevant questions js / header
	- please also refer to individual components:
	continuealert (final survey pages), 
	copytoclipboard (prescreener pc no email ), 
	datepicker (prescreener dob), 
	gert, 
	progressbar (header)
*/

// toggle content used for definitions on the gert - ensure that the id is correct on the div
Qualtrics.SurveyEngine.addOnload(function () {
	this.questionclick = () => {
		const gertDisplay = document.getElementById("gert").style.display;
		gertDisplay === "none" ? (gertDisplay = "block") : (gertDisplay = "none");
	};
});

// example for checking embedded data scoring
const lidas = Qualtrics.SurveyEngine.getEmbeddedData("lidas_symptoms_0"); // ${e://Field/...}
console.log(lidas);

// formatting issue with powered by qualtrics - use with buttons css//
Qualtrics.SurveyEngine.addOnReady(function () {
	jQuery("#Plug").attr("style", "display:none !important");
	// || .css("display", "none!important")
});

//changing emodis size// - this does not work affects spacing
Qualtrics.SurveyEngine.addOnReady(function () {
	jQuery("span").attr("style", "font-size:larger !important");
	jQuery("li").attr("style", "font-size:larger !important");
});
