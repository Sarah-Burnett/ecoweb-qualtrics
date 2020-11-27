-- SELECT 
-- PS.email, 
-- BS.email, 
-- PS.reference,
-- BS.reference
-- PS.StartDate, 
-- PS.EndDate, 
-- PS.Status, 
-- PS.ps_dob, 
-- PS.gaClientId, 
-- PS.Country,
-- PS.ps_prescreener,
-- PS.ps_country,
-- PS.os_android,	
-- PS.os_ios,
-- BS.StartDate, 
-- BS.EndDate, 
-- BS.Status, 
-- BS.ResponseId,  
-- BS.gender_0, 
-- BS.ethnicity_0, 
-- BS.recruit_q1_0, 
-- BS.recruit_q1_0_9_TEXT, 
-- BS.recruit_q2_0, 
-- BS.recruit_q2_0_8_TEXT, 
-- F1P1.StartDate, 
-- F1P1.reference, 
-- F1P2.StartDate, 
-- F1P2.reference,
-- F2P1.StartDate, 
-- F2P1.reference,
-- F2P2.StartDate, 
-- F2P2.reference,
-- F3P1.StartDate, 
-- F3P1.reference,
-- F3P2.StartDate, 
-- F3P2.reference
-- FROM ((((((`C:\participants\LIVE+ECoWeB+Prescreener.xlsx`.`output$` PS
-- LEFT JOIN `C:\participants\LIVE+NEW+ECoWeB+Baseline+Assessment.xls`.`output$` BS
-- ON PS.email = BS.email )
-- LEFT JOIN `C:\participants\LIVE+ECoWeB+1+month+follow+up+part+1.xls`.`output$` F1P1
-- ON PS.email = F1P1.email ) 
-- -- LEFT JOIN `C:\participants\LIVE+ECoWeB+1+month+follow+up+part+2.xls`.`output$` F1P2
-- -- ON PS.email = F1P2.email )
-- -- LEFT JOIN `C:\participants\LIVE+ECoWeB+3+month+follow+up+part+1.xls`.`output$` F2P1
-- -- ON PS.email = F2P1.email )
-- -- LEFT JOIN `C:\participants\LIVE+ECoWeB+3+month+follow+up+part+2.xls`.`output$` F2P2
-- -- ON PS.email = F2P2.email )
-- -- LEFT JOIN `C:\participants\LIVE+ECoWeB+12+month+follow+up+part+1.xls`.`output$` F3P1
-- -- ON PS.email = F3P1.email )
-- -- LEFT JOIN `C:\participants\LIVE+ECoWeB+12+month+follow+up+part+2.xls`.`output$` F3P2
-- -- ON PS.email = F3P2.email

SELECT 
`PS$`.email, 
`BS$`.email,
`PS$`.PrescreenerReference, 
`BS$`.BaselineReference,
`PS$`.PrescreenerStartDate, 
`PS$`.PrescreenerEndDate, 
`PS$`.ps_country, 
`PS$`.ps_prescreener, 
`PS$`.os_android, 
`PS$`.os_ios, 
`PS$`.ps_dob, 
`PS$`.gaClientId, 
`PS$`.Country, 
`BS$`.BaselineStartDate, 
`BS$`.BaselineEndDate, 
`BS$`.ResponseId, 
`BS$`.consa_sign_Id, 
`BS$`.gender_0, 
`BS$`.ethnicity_0, 
`BS$`.recruit_q1_0, 
`BS$`.recruit_q1_0_9_TEXT, 
`BS$`.recruit_q2_0, 
`BS$`.recruit_q2_0_8_TEXT, 
`BS$`.consb_sign_Id
FROM `C:\participants\downloads.xlsx`.`PS$` `PS$`
LEFT JOIN `C:\participants\downloads.xlsx`.`BS$` `BS$`
ON `PS$`.email = `BS$`.email