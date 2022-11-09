
/*********   CODE CHALLENGE 01   **********/
 
/*
    Geben Sie über eine Prompt-Anforderung eine Zahl ein.
    Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
    Berechnen Sie die Summe der beiden Zahlen.
    Geben Sie die Summe der Zahlen in die Konsole aus:
    "Die Summe der Zahlen ist: summe"
*/

/**************************************/
/*********   Möglichkeit 1   **********/
/**************************************/
let zahlEins1, zahlZwei1, zahlSumme1;

zahlEins1 = parseInt( prompt( "Geben Sie eine 1. Zahl ein: " ) );            // parseInt wandelt den String Wert aus prompt in eine Integer Zahl um
zahlZwei1 = prompt( "Geben Sie eine 2. Zahl ein: " );                        // prompt ohne allem ist ein String

zahlSumme1 = zahlEins1 + parseInt( zahlZwei1 );                              // parseInt wandelt auch den 2. String Wert aus prompt in eine Integer Zahl um

console.log( "Die Summe der Zahlen ist: " + zahlSumme1 );


/**************************************/
/*********   Möglichkeit 2   **********/
/**************************************/

let zahlEins2, zahlZwei2, zahlSumme;

zahlEins2 = Number( prompt( "Geben Sie eine 1. Zahl ein: " ) );              // Number wandelt den String Wert aus prompt in eine Integer Zahl um
zahlZwei2 = prompt( "Geben Sie eine 2. Zahl ein: " );                        // prompt ohne allem ist ein String

zahlSumme2 = zahlEins2 + Number( zahlZwei2 );                                // Number wandelt auch den 2. String Wert aus prompt in eine Integer Zahl um

console.log( "Die Summe der Zahlen ist: " + zahlSumme2 );


/**************************************/
/*********   Möglichkeit 3   **********/
/**************************************/

let zahlEins3 = Number( prompt( "Geben Sie eine 1. Zahl ein: " ) );
let zahlZwei3 = Number( prompt( "Geben Sie eine 2. Zahl ein: " ) );

let zahlSumme3 = zahlEins3 + zahlZwei3;

console.log( "Die Summe der Zahlen ist: " + zahlSumme3 );


/**************************************/
/*********   Möglichkeit 4   **********/
/**************************************/

console.log( "Die Summe der Zahlen ist: " + ( Number( prompt( "Geben Sie eine 1. Zahl ein: " ) ) + Number( prompt( "Geben Sie eine 2. Zahl ein: " ) ) ) );


/**************************************/
/*********   Möglichkeit 5   **********/
/**************************************/

console.log( "Die Summe der Zahlen ist: " + ( +prompt( "Geben Sie eine 1. Zahl ein: " ) + +prompt( "Geben Sie eine 2. Zahl ein: " ) ) );


/*
    der Unterschied zwischen parse und Number ist, dass pasreInt alles in Integral Zahlen verwandelt, also keine Kommazahl,
    und parseFloat eben in Kommazahlen. Wenn man aber Number nimnmt, kalkuliert er mit allen möglichen numerischen Werten,
    also Ganzzahlen und Kommazahlen.

    Das Plus vor Prompt generiert eine automatische Typenwahl, was aber sehr unsicher und nicht zu verwenden empfohlen wird.
*/
