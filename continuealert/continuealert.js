const alertBox = document.querySelector('#alert');
const langAlert = {
    "EN": "Please ensure you click 'continue' at the bottom of the page to send us your answers. Thank you.",
    "DE": "Bitte achte darauf, am Ende der Seite auf 'Weiter' zu klicken, um uns deine Antworten zu senden. Danke.",
    "NL": "Gelieve er op te letten op het einde van de pagina op ‘verdergaan’ te klikken om ons jouw antwoorden gegeven op de vorige pagina’s te sturen. Bedankt. ",
    "ES-ES": "Por favor, asegúrate de hacer clic en 'continuar' al final de la página para enviarnos tus respuestas. Gracias."
};
alertBox.innerHTML = langAlert['${e://Field/Q_Language}'];
alertBox.style.display = "block";
alertBox.addEventListener('click', () => {alertBox.style.display = "none"})