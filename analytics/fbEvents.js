//FACEBOOK: improve ads

const { gainsboro } = require("color-name");

fbq("trackCustom", "parentConsented"); //completed parental consent

fbq("trackCustom", "participantExcluded", { reason: "" }); //on exclusion page (ps / bs)
fbq("trackCustom", "participantIncluded"); //completed baseline

fbq("trackCustom", "reachedEndpoint"); //all ctu endpoints



//GOOGLE ANALYTICS - track 
//TODO: add in events for google to track
ga("")