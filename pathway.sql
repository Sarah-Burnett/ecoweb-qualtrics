SELECT 
`PS$`.reference AS PSReference, 
`BS$`.reference AS BSReference,
`PS$`.StartDate AS PSStartDate, 
`PS$`.EndDate AS PSEndDate, 
`PS$`.ps_country, 
`PS$`.ps_prescreener, 
`PS$`.os_android, 
`PS$`.os_ios, 
`PS$`.ps_dob, 
`PS$`.gaClientId, 
`PS$`.Country, 
`BS$`.StartDate AS BSStartDate, 
`BS$`.EndDate AS BSEndDate, 
`BS$`.ResponseId, 
`BS$`.consa_sign_Id, 
`BS$`.gender_0, 
`BS$`.ethnicity_0, 
`BS$`.recruit_q1_0, 
`BS$`.recruit_q1_0_9_TEXT, 
`BS$`.recruit_q2_0, 
`BS$`.recruit_q2_0_8_TEXT, 
`BS$`.consb_sign_Id,
`F1P1$`.reference AS F1P1Reference,
`F1P1$`.StartDate AS F1P1StartDate, 
`F1P1$`.EndDate AS F1P1EndDate,
`F1P2$`.reference AS F1P2Reference,
`F1P2$`.StartDate AS F1P2StartDate, 
`F1P2$`.EndDate AS F1P2EndDate,
`F2P1$`.reference AS F2P1Reference,
`F2P1$`.StartDate AS F2P1StartDate, 
`F2P1$`.EndDate AS F2P1EndDate,
`F2P2$`.reference AS F2P2Reference,
`F2P2$`.StartDate AS F2P2StartDate, 
`F2P2$`.EndDate AS F2P2EndDate,
`F3P1$`.reference AS F3P1Reference,
`F3P1$`.StartDate AS F3P1StartDate, 
`F3P1$`.EndDate AS F3P1EndDate,
`F3P2$`.reference AS F3P2Reference,
`F3P2$`.StartDate AS F3P2StartDate
FROM ((((((`C:\participants\downloads.xlsx`.`PS$` `PS$`
LEFT JOIN `C:\participants\downloads.xlsx`.`BS$` `BS$`
ON `PS$`.email = `BS$`.email )
LEFT JOIN `C:\participants\downloads.xlsx`.`F1P1$` `F1P1$`
ON `PS$`.email = `F1P1$`.email )
LEFT JOIN `C:\participants\downloads.xlsx`.`F1P2$` `F1P2$`
ON `PS$`.email = `F1P2$`.email )
LEFT JOIN `C:\participants\downloads.xlsx`.`F2P1$` `F2P1$`
ON `PS$`.email = `F2P1$`.email )
LEFT JOIN `C:\participants\downloads.xlsx`.`F2P2$` `F2P2$`
ON `PS$`.email = `F2P2$`.email )
LEFT JOIN `C:\participants\downloads.xlsx`.`F3P1$` `F3P1$`
ON `PS$`.email = `F3P1$`.email )
LEFT JOIN `C:\participants\downloads.xlsx`.`F3P2$` `F3P2$`
ON `PS$`.email = `F3P2$`.email