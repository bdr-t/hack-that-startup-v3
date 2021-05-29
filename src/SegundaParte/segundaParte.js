// funcion para haccer llamada a la api y conseguir el id

export function fetchId() {
  //Obtengo credenciales para evitar los limtes
  //Utilizo .env para alamacenar las credenciales(añadodo .env a gitignore)
  //Utilizo btoa para codificar mis credenciales
  const encode = btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`);

  // Utilizo fetch para hacer la llamada.
  // le añado el metodo GET y basic authorization con mis credenciales codificadas
  fetch('https://api.github.com/repos/gagocarrilloedgar/HTSV2', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `basic ${encode}`,
    },
  })
    // paso resultado de JSON a objeto
    .then((response) => response.json())
    // devuelvo el id 
    .then((result) => console.log(result.id))
    .catch((error) => console.log('error', error));
}
