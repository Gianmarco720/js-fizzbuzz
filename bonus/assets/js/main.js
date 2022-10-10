// scrivo i numeri da 1 a 100
for (let i = 0; i <= 100; i++) {
    console.log(i);

    // controllo i multipli di 3 con %
    if (i % 3 == 0) {
        console.log('Fizz');
    } 

    // controllo i multipli di 5 con %
    if (i % 5 == 0) {
        console.log('Buzz');
    }

    // controllo i multipli di 3 e 5 %
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
}

// BONUS 1:

// seleziono un elemento del DOM
const containerEl = document.getElementsByClassName('.container');
console.log(containerEl, 'container selezionato');

// aggiungo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.