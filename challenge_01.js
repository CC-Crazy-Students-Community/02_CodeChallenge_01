
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

let zahlEins = parseInt(prompt( "Geben Sie eine 1. Zahl ein: " ));
let zahlZwei = prompt( "Geben Sie eine 2. Zahl ein: " );

let zahlSumme = zahlEins + parseInt(zahlZwei);
console.log( "Die Summe der Zahlen ist: " + zahlSumme );
