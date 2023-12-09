/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

const rispostaData = 'Esistono diversi datatype in JavaScript, che possiamo suddividere in Primitivi e Strutturati. I dati primitivi sono rappresentati principalmente da numeri, stringhe, booleani, null e undefined. Esempi di dati strutturati sono invece gli oggetti, gli array e le funzioni.'

'Il tipo "number" è rappresentato da cifre di qualsiasi tipo e natura (numeri interi, decimali, negativi, etc...)'

const esempioNumber = 16;

'Il tipo "string" è invece rappresentato da sequenze di caratteri (testi) di qualsiasi lunghezza.'

const esempioStringa = 'questa è una stringa';

'I "boolean" sono entità logiche di tipo binario con valore TRUE o FALSE, sono indispensabili per la logica computazionale.'

const esempioBoolean = true; 

'Null e Undefined rappresentano in entrambi i casi un dato a cui il valore non è stato assegnato, la differenza sostanziale tra i due è che NULL viene assegnato dallo sviluppatore in fase di scrittura del codice, mentre UNDEFINED è un valore di default assegnato in caso di variabili non specificate nel loro contenuto.'

const esempioNull = null;
const esempioUndefined = 

'Per quanto riguarda i dati strutturati: possiamo pensare agli Oggetti come contenitori semantici di dati primitivi che si riferiscono a una stessa entità e possono essere di tipo diverso'

'Gli Array, invece, contengono anche loro una serie di dati ma questi devono essere necessariamente dello stesso tipo (tutti numeri, tutte stringhe...)'

'Le funzioni, per concludere, sono blocchi di codice che vengono scritti per svolgere una determinata funzione o azione.'

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

const rispostaOggetto = 'Object è un tipo di dato strutturato, ciò significa che è costituito da un insieme di dati Primitivi (es: numeri, stringhe, boolean...). Nello specifico "object" racchiude semanticamente una serie di dati che rappresentano le caratteristiche di una stessa entità, a differenza degli Array i dati racchiusi in un Object possono essere di tipi diversi. Possono essere degli esempi di variabili object le caratteristiche di una persona o la scheda di un film (seguono esempi).'

let person = {
    personName: 'Vanessa',
    personAge: 28,
    isBlonde: false,
}

console.log(person);

let movie = {
    title: 'Star Wars',
    duration: 120 + ' minutes',
    bestFilmEver: true,
}
console.log(movie);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let Somma = 12 + 20;
console.log(Somma)

//oppure

let varUno = 12;
let varDue = 20;

let varSomma = (varUno + varDue);
console.log(varSomma);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'Vanessa';
console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let varSottrazione = 4-x;
console.log(varSottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let nameOne = 'john';
let nameTwo = 'John';

//Verifica Uno
let verificaUno = (nameOne == nameTwo);
console.log(verificaUno);

//Verifica Due 
let verificaDue = (nameOne == nameTwo.toLowerCase())
console.log(verificaDue);