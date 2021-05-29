import { useEffect, useState } from 'react';
import axios from 'axios';


// custom hook para recibir datos que reecibe link como parametro
function useFetch(link) {
  // data: el json
  const [data, setData] = useState(null);
  // status: estado del fetch('idle' -> 'loading' -> 'succeded')
  const [status, setStatus] = useState('idle');
  // error: true si hay error
  const [error, setError] = useState(null);


  // utilizo useEffect, que se ejecutara cada vez que link cambie
  useEffect(() => {
    const encode = btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`);
    // hago fetch con mis credenciales de forma asincrona
    const fetchData = async () => {
        setStatus('loading')
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `basic ${encode}`,
              },
        };
        let response = await axios
          .get(
            link,
            config
          )
          .then((response) => {
              return response.data
          })
          .catch(err => setError(true))
          setData(response)
          setStatus('succceded')
      }
    fetchData();
  }, [link]);


  return { data, status, error };
}

export default useFetch;
