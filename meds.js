//TODO: this does not work mate

const selects = document.querySelectorAll("select");
const medSelectIndices = [1, 3, 5, 7];
const removeMedIndices = [2, 3, 4, 7, 8];
const lang = Qualtrics.SurveyEngine.getEmbeddedData("Q_Language");

if (lang === "NL") {
	medSelectIndices.forEach((select) => {
		removeMedIndices.forEach((option) => selects[select].remove(option));
	});
} else {
	medSelectIndices.forEach((select) => {
		for (let i = 9; i < select.length; i++) {
			selects[select].remove(i);
		}
	});
}