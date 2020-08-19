/* Extra script used on Qualtrics found in the relevant questions js / header
	- please also refer to individual components:
	continuealert (final survey pages), 
	copytoclipboard (prescreener pc no email ), 
	datepicker (prescreener dob), 
	gert, 
	progressbar (header)
*/

//language force after country selection
Qualtrics.SurveyEngine.addOnload(function () {
	var startingLang = "${e://Field/startingLang}";
	var countryLang = "${e://Field/countryLang}";
	var alertBox = document.querySelector("#alert");
	var langAlert = {
		EN: "Survey must currently be taken in the countries official language.",
		DE:
			"Die Umfrage muss derzeit in der Amtssprache des Landes durchgeführt werden.",
		NL:
			"De enquête moet momenteel worden afgenomen in de officiële taal van het land.",
		"ES-ES":
			"Actualmente, la encuesta debe realizarse en el idioma oficial del país.",
	};
	function showAlert(lang) {
		alertBox.innerHTML = langAlert[lang];
		alertBox.style.display = "block";
	}
	if (startingLang !== countryLang) {
		showAlert(startingLang);
		jQuery("#Q_lang").val(countryLang);
		jQuery("#Q_lang").trigger("change");
	}
	alertBox.addEventListener("click", function () {
		alertBox.style.display = "none";
	});
});

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
