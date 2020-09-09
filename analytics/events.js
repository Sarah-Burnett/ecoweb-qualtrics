fbq("trackCustom", "openedWix"); //TODO: fbq undefined in corvid

fbq("trackCustom", "openedPrescreener"); // first page
fbq("trackCustom", "excludedPrescreener", { reason: "" }); //TODO:
fbq("trackCustom", "includedPrescreener"); //completed email
fbq("trackCustom", "parentalConsentNeeded"); //reached parent consent page

fbq("trackCustom", "openedParent"); //first page 
fbq("trackCustom", "parentConsented"); //completed contact details


fbq("trackCustom", "openedBaseline"); //first page
fbq("trackCustom", "consentedSurvey"); // completed consent a
fbq("trackCustom", "excludedBaseline", { reason: ""}); //exclusion pages
fbq("trackCustom", "includedBaseline"); //reached gad
fbq("trackCustom", "consentedStudy"); //reached welcome page

fbq("trackCustom", "reachedEndpoint"); //TODO: sent to tim
