const qualtrics = "Zoals beschreven in de Informatiebrief over deze studie zal de klinisch psycholoog van het UGent ECoWeB team iemand proberen te bereiken wanneer er bezorgdheden zijn over zijn/haar antwoorden op de vragenlijstenvragen die peilen naar regelmatige zelfmoordgedachten of plannen of intenties om zichzelf te verwonden of te doden. Dit betekent dat deze klinisch psycholoog jou zal opbellen om te bespreken wat je ervaart en samen met jou na zal gaan wat je kan doen dat jou kan helpen, verdere doorverwijzing inbegrepen (wanneer dit nodig is). Dit betekent dat deze klinisch psycholoog geen psychotherapie zal bieden, maar je naar geschikte hulp zal verwijzen. Daarnaast lijsten we ook hieronder hulpbronnen op zodat je zelf onmiddellijk hulp kan zoeken. Gedachten aan zelfmoord en/of zelfverwonding kunnen sterk variëren. Het kan zijn dat het slechts gaat om een korte gedachte van voorbijgaande aard, of het kan een gevoel van 'zich gevangen voelen' weerspiegelen, maar dit zonder dat iemand de intentie heeft om ook daadwerkelijk iets te doen. Dergelijke gedachten zijn relatief veelvoorkomend en niet zo ongewoon bij mensen die onder stress staan. Wanneer je hulp wil bij het omgaan met deze gedachten, neem contact op met de zelfmoordlijn op het telefoonnummer 1813 of via de chat op www.zelfmoord1813.be/chat-met-zelfmoordlijn-1813, met je huisarts of met een andere relevante medische hulpverlener.";
const doc = "Zoals beschreven in de Informatiebrief over deze studie belt zal de klinisch psycholoog van het UGent ECoWeB team iemand op proberen te bereiken wanneer er bezorgdheden zijn over zijn/haar antwoorden op de vragenlijstenvragen die peilen naar regelmatige zelfmoordgedachten of plannen of intenties om zichzelf te verwonden of te doden. Dit betekent dat deze klinisch psycholoog jou zal opbellen om te bespreken wat je ervaart en samen met jou na zal gaan wat je kan doen dat jou kan helpen, verdere doorverwijzing inbegrepen (wanneer dit nodig is). Dit betekent dat deze klinisch psycholoog geen psychotherapie zal bieden, maar je naar geschikte hulp zal verwijzen. Daarnaast lijsten we ook hieronder hulpbronnen op zodat je zelf onmiddellijk hulp kan zoeken.Gedachten aan zelfmoord en/of zelfverwondingDit soort gedachten kunnen sterk variëren. Het kan zijn dat het slechts gaat om een korte gedachte van voorbijgaande aard, of het kan een gevoel van 'zich gevangen voelen' weerspiegelen, maar dit zonder dat iemand de intentie heeft om ook daadwerkelijk iets te doen. Dergelijke gedachten zijn relatief veelvoorkomend en niet zo ongewoon bij mensen die onder stress staan. Wanneer je hulp wil om om tebij het omgaan met deze gedachten, neem contact op met de zelfmoordlijn op het telefoonnummer 1813 of via de chat op www.zelfmoord1813.be/chat-met-zelfmoordlijn-1813, met je huisarts of met een andere relevante medische hulpverlener.";

let arr = '';

for (let i = 0 ; i < qualtrics.length; i++) {
    qualtrics[i] === doc[i] ? arr = doc.slice([i]) : false;
}

console.log(arr);