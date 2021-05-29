import { data } from '../MOCK_DATA';

// variable para alamcenar el numero de last_name con 'Nuwe'
let nuweLastName = 0;
// objecto para alamacenar solamente la id del primer resultado con 'Nuwe'
let cache = {};
// varible para comparar ip y dejar el de mayor valor
let cacheIp = 0;

for (let x = 0; x < data.length; x++) {
  // bucle por todos los elementos de data

  // comprueba si last_name es igual a 'Nuwe'
  if (data[x].last_name === 'Nuwe') {
    // mira si ya tenmos almacenada en cache la id
    // si encuentra algo no hace nada
    // si no encuentra nada añade id del primer resulado con 'Nuwe'
    if (!cache['Nuwe']) {
      cache['Nuwe'] = data[x].id;
    }

    // añade 1 a nuweLastName si last_name es igual a 'Nuwe'
    nuweLastName++;
  }

  // comprueba si el elemento no tiene el atributo pet
  if (!data[x].pet) {
    // utilizo split para dividir el string por los puntos
    // se convierte en array, por lo que, cojo el primer elemento con [0]
    // Utilizo Number para pasarlo a numero 
    let num = Number(data[x].ip.split('.')[0]);
    // Comparo el numero obtenido con el que se encuentra en cachIp
    // Si es mayor lo sustituye, si no lo es, no hace nada
    if (num > cacheIp) {
      cacheIp = num;
    }
  }
}

// Utilizo replace y regex para sustituir todas las letras
let segundoParam = cache['Nuwe'].replace(/\D/g, '');


let contraseña = `${nuweLastName}-${segundoParam}-${cacheIp}`
console.log(contraseña)

//refactorizado, antes era un component de react.
//solo lo he utilizado para acceder al documento.