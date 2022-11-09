
/*********   CODE CHALLENGE 01   **********/
 
/*
    Geben Sie über eine Prompt-Anforderung eine Zahl ein.
    Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
    Berechnen Sie die Summe der beiden Zahlen.
    Geben Sie die Summe der Zahlen in die Konsole aus:
    "Die Summe der Zahlen ist: summe"
*/

let zahlEins = parseInt(prompt( "Geben Sie eine 1. Zahl ein: " ));      // parseInt wandelt den String Wert aus prompt in eine Integer Zahl um
let zahlZwei = prompt( "Geben Sie eine 2. Zahl ein: " );

let zahlSumme = zahlEins + Number(zahlZwei);                            // Number wandelt auch den String Wert aus prompt in eine Integer Zahl um

console.log( "Die Summe der Zahlen ist: " + zahlSumme );


/*
    der Unterschied zwischen parse und Number ist, dass pasreInt alles in Integral Zahlen verwandelt, also keine Kommazahl,
    und parseFloat eben in Kommazahlen. Wenn man aber Number nimnmt, kalkuliert er mit allen möglichen numerischen Werten,
    also Ganzzahlen und Kommazahlen
*/