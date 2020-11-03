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
