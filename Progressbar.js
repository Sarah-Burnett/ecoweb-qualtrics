// PROGRESS BAR ARRAY - only executing up to third console.log ???? 
function incProgressBar() {
    let pbOld = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('pb'));
    if (pbOld < 98) {
        let pbNew = pbOld +1 ;
        Qualtrics.SurveyEngine.setEmbeddedData('pb', pbNew);
    }
}   
function progressBar() { 
    const extraQ = ["QID162"];
    for (i = 0; i < extraQ.length; i++) {
        let y = extraQ[i];
        console.log(y);
        let x = document.getElementById(y);
        console.log(x);
        return x;
    }
    console.log(x);
    if (x === null) {
        incProgressBar();
        console.log(pbOld);
    }
};
progressBar();

// PROGESS BAR USING FUNCTIONS
function incProgressBar() {
    let pbOld = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('pb'));
    if (pbOld < 98) {
    let pbNew = pbOld +1 ;
    Qualtrics.SurveyEngine.setEmbeddedData('pb', pbNew);
    }
}
function decProgressBar (){
    let pbCur = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('pb'));
    let pbRev = pbCur -1;
    Qualtrics.SurveyEngine.setEmbeddedData('pb', pbRev);
    }
incProgressBar();

// then call decProgressBar on q to halt progress - doesn't execute until page after
decProgressBar();

/* OLD GLOBAL VERSION PRIOR TO USING FUNCTION

// question js for questions with no progress
increment = 1;
var pbCurrent = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('pb'));
var pbReverse = pbCurrent - increment;
Qualtrics.SurveyEngine.setEmbeddedData('pb', pbReverse); 

// question js for final page
var pbFinal = 100;
Qualtrics.SurveyEngine.setEmbeddeddata('pb', pbFinal);

*/