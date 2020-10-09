//template
ga(
	"send",
	"event",
	[eventCategory], //started, included, excluded
	[eventAction], // start , finish
	[eventLabel], // included, reason for exclusion
	[eventValue]
);

ga("send", "event", "PrescreenerOpened", "start");
ga("send", "event", "PrescreenerCompleted", "end");
ga("send", "event", "ParentConsentNeeded", "end")

ga("send", "event", "BaselineOpened", "start");
ga("send", "event", "BaselineCompleted", "include");

ga("send", "event", "Included", "include");
ga("send", "event", "Excluded", "exclude", "[reasonforExclusion]");
// reasons for exclusion: age, country, bipolar, past dep, curr dep, therapy, risk

//goals:
[WixOpened] //WixOpened event
[QualtricsStarted] //PrescreenerOpenend event
[QualtricsCompleted] //BaselineCompleted event