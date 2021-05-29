import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(link) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    const encode = btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`);
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
