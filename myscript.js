//Creare un array di oggetti
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

let biciclette = [
{ nome:'strada',
  peso:'3',
  colore:'rosso'},
{ nome:'montagna',
  peso:'2',
  colore:'bianco'},
{ nome:'timer',
  peso:'5',
  colore:'blu'},
{ nome:'velocita',
  peso:'1',
  colore:'argento'}
];

let biciclettaleggera = null;
biciclette.forEach(element => {
  if(biciclettaleggera == null || biciclettaleggera.peso > element.peso){
    biciclettaleggera = element;
  }
});

const {nome,peso} = biciclettaleggera;

    $('.content').html(
      `<div>
        <h3>nome della bici più leggera: ${nome}</h3>
        <h3>peso della bici più leggera: ${peso}</h3>
      </div>`
    );

//jsnack2
    // Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
    // Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
    // Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione
    // (indice array)  compresa tra i due numeri inseriti dall'utente.


    const nomi = ['Stefano', 'Andrea', 'Mattia', 'Alessandro', 'Giacomo', 'Riccardo'];

    const numNomi = nomi.length - 1;

    const min = parseInt( prompt('Inserisci un numero da 0 a ' + numNomi) );
    //controllo se il valore inserito è un numero e se è maggiore del indice massimo del array
    while (isNaN(min) || min > numNomi) {
      min = parseInt( prompt('Inserisci un valore da 0 a ' + numNomi) );
    }

    const max = parseInt( prompt('Inserisci un valore da 0 a ' + numNomi + ' che sia maggiore di quello inserito precedentemente') );
    //controllo se il valore inserito è un numero e se è maggiore del indice massimo del array
    while (isNaN(max) || max < min || max > numNomi) {
      max = parseInt( prompt('Inserisci un valore da 0 a ' + numNomi + ' che sia maggiore di quello inserito precedentemente') );
    }
    //filtro per capire i nomi che stanno all'interno del array e li inserisco nel nuovo array
    let nomiInmezzo = [];
    nomiInmezzo = nomi.filter( (element, index) => {
      if (index >= min && index <= max) {
        return element
      }
    });
    console.log('primo array '+nomi);
    console.log('indice minimo '+min + ' indice massimo '+max);
    console.log('nuovo array ' + nomiInmezzo);


//jsnack3
//Creiamo un array di oggetti
//Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà
//contiene una lettera casuale.
//Non dobbiamo modificare l'array iniziale.


let macchine = [
    {
        name: 'Ferrari',
        color: 'rosso'
    },
    {
        name: 'Mercedes',
        color: 'argento'
    },
    {
        name: 'Bmw',
        color: 'nera'
    },
    {
        name: 'Audi',
        color: 'bianca'
    }
];

const macchineDue = [...macchine].map(element => {
  return{
    ...element,
    codice:randomLetters(),
  }
});
//stampa primo
console.table(macchine);
//stampa secondo con nuovo oggetto
console.table(macchineDue);
//funzione per creare lettere random e assegnarne una usando anche random numbers per sceglierla tra le possibili
function randomLetters() {
    var letterepossibili = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lettera = letterepossibili[randomNumbers(0, letterepossibili.length - 1)];
    return lettera;
}
function randomNumbers(min,max) {
    var num = Math.floor( Math.random() * (max - min + 1) ) + min;
    return num
}
