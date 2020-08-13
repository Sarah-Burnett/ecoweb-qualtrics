// Don't forget to import the pikaday cdn into header

Qualtrics.SurveyEngine.addOnload(function(){
	var inputId = 'QR~' + this.questionId;
    var languages = {
		"ES-ES": {
			months:["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
			weekdays: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
			weekdaysShort: ["dom","lun","mar","mier","jue","vie","sab",],
		},
		"NL": {	
			months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "October", "November", "December"],
			weekdays: ["zondag", "maandag", "dinsdag", "woensday", "donderdag", "vrijdag", "zaterdag"],
			weekdaysShort: ["zo", "ma", "di", "wo", "do", "vr", "za",],
		},
		"DE": {
			months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            weekdays: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            weekdaysShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa",],	
		},
		"EN": {
			months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    		weekdays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
   			weekdaysShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',],
		},
	};
	new Pikaday(
		{
		field: document.getElementById(inputId),
		firstDay: 1,
		defaultDate: new Date(2000,0),	
		i18n: languages['${e://Field/Q_Language}'],
		format: "DD/MM/YYYY",
		onSelect: function(date) {
           	const todayInSeconds = new Date().getTime();
			const birthdayInSeconds = date.getTime();
			const ageInSeconds = todayInSeconds - birthdayInSeconds;
			const ageInYears = Math.floor(ageInSeconds / (1000 * 3600 * 24) / 365);
			Qualtrics.SurveyEngine.setEmbeddedData("Age", ageInYears);
			},
		});
    });
    
Qualtrics.SurveyEngine.addOnReady(function()
{
	jQuery("#"+this.questionId+" .InputText:first").attr("readonly",true);
});