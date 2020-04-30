// Telephone number validation must be number
// parental consent - parent

Qualtrics.SurveyEngine.addOnload(function()
{
	const lang = "${e://Field/Q_Language}"
	if (lang === "NL") {
		document.querySelector(".QR-QID21-12").placeholder = "schrijf telefoonnummer zonder spaties of andere tekens, bv. 092646459";
	}
});

// baseline -  participant and trusted person

Qualtrics.SurveyEngine.addOnload(function()
{
	const lang = "${e://Field/Q_Language}"
	if (lang === "NL") {
        document.querySelector(".QR-QID1366-4").placeholder = "schrijf telefoonnummer zonder spaties of andere tekens, bv. 092646459";
		document.querySelector(".QR-QID1367-8").placeholder = "schrijf telefoonnummer zonder spaties of andere tekens, bv. 092646459";
	}
});