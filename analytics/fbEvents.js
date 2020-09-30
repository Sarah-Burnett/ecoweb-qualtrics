//FACEBOOK: improve ads
fbq("trackCustom", "WixOpened");
fbq("trackCustom", "WixGetStarted");

fbq("trackCustom", "OpenedPrescreener");
fbq("trackCustom", "Excluded", { reason: "" }); //on exclusion page (ps / bs)
fbq("trackCustom", "ParentConsentNeeded");
fbq("trackCustom", "PrescreenerCompleted");

fbq("trackCustom", "ParentOpened")
fbq("trackCustom", "ParentConsented"); //completed parental consent

fbq("trackCustom", "OpenedBaseline")
fbq("trackCustom", "ConsentedSurvey");
fbq("trackCustom", "ConsentedStudy");
fbq("trackCustom", "Excluded", { reason: "" }); //on exclusion page (ps / bs)

fbq("trackCustom", "BaselineCompleted"); //completed baseline


fbq("trackCustom", "reachedEndpoint"); //all ctu endpoints
