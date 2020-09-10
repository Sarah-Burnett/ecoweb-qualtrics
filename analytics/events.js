//improve ads - track people who complete

fbq("trackCustom", "parentConsented"); //completed parental consent

fbq("trackCustom", "participantExcluded", { reason: "" }); //on exclusion page (ps / bs)
fbq("trackCustom", "participantIncluded"); //completed baseline


fbq("trackCustom", "reachedEndpoint"); //all ctu endpoints

//open survey ??? 
