//template
ga(
	"send",
	"event",
	[eventCategory], //started, included, excluded
	[eventAction], // start , finish
	[eventLabel], // included, reason for exclusion
	[eventValue]
);

//started
ga("send", "event", "surveyStart", "start");

//included
ga("send", "event", "surveyIncluded", "include", "included");

//excluded
ga("send", "event", "surveyExcluded", "exclude", "[reasonforExclusion]");
// reasons for exclusion: age, country, bipolar, past dep, curr dep, therapy, risk