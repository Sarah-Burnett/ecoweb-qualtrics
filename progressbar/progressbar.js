// PROGESS BAR

//in Header of look and feel to excecute on all 'pages'
function incProgressBar() {
    let pbOld = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('pb')); // || ${e://Field//pb}
    if (pbOld < 98) {
    let pbNew = pbOld +1 ;
    Qualtrics.SurveyEngine.setEmbeddedData('pb', pbNew);
    }
}
function decProgressBar(){
    let pbCur = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('pb')); // || ${e://Field//pb}
    if (pbOld < 98) {
    let pbRev = pbCur -1;
    Qualtrics.SurveyEngine.setEmbeddedData('pb', pbRev);
    }
}

incProgressBar();

/* then call decProgressBar in question js to halt progress (e.g. lidas)
 - doesn't execute until 'page' after */
decProgressBar();