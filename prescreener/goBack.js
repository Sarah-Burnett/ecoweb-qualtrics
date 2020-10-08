// need to enable back button in options
// need to add styling for buttons - display: none for #PreviousButton and opacity:1 for #NextButton:disabled
// change branch to display login
// remove branches from survey flow

Qualtrics.SurveyEngine.addOnload(function () {
	var that = this;
	this.disableNextButton();
	document.querySelector("#Buttons").onclick = function () {
		that.clickPreviousButton();
	};
});
