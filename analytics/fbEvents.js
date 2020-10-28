//FACEBOOK: improve ads
fbq("trackCustom", "WixOpened"); 
fbq("trackCustom", "WixConversion");

fbq("trackCustom", "PrescreenerOpened");
fbq("trackCustom", "PrescreenerCompleted");

fbq("trackCustom", "ParentConsentNeeded");
fbq("trackCustom", "ParentOpened");
fbq("trackCustom", "ParentConsented");

fbq("trackCustom", "BaselineOpened");
fbq("trackCustom", "BaselineCompleted");

fbq("trackCustom", "Included"); //got past exclusion but not completed
fbq("trackCustom", "Excluded", { reason: "" }); //on exclusion page (ps / bs)

fbq("trackCustom", "reachedEndpoint"); //all ctu endpoints
