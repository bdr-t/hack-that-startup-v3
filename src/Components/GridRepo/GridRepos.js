import useFetch from '../../Hooks/useFetch';
import { Grid } from './GridRepos.style';
import Repo from './Repo/Repo';
import { useHistory } from 'react-router-dom';

const GridRepos = ({ name }) => {
  //recibe name como props
  const { data, status, error } = useFetch(`https://api.github.com/users/${name}/repos`);

  //utilizo useHisory para cambiar de ruta
  const history = useHistory();

  // creo content variable que ser el que se rendetiza
  let content;

  // si status es igual a loading
  // if(status === 'loading') content = 'loading'

  //si hay error, significa que el usuario no exite y redirige otra vez a Login componente
  if (error) {
    history.push('/notFound');
  }

  //si hay data siginifica que staus es 'succeded'
  if (data) {
    // hago un map sobre todos los repositorios que tenga el usario y paso informacion necesaria como props al componente Repo
    content = data.map((element) => {
      return (
        <Repo
          key={element.id}
          enlace={element.html_url}
          name={element.name}
          watchers={element.watchers}
          forks={element.forks}
          language={element.language}
        />
      );
    });
  }

  return <Grid>{content}</Grid>;
};

export default GridRepos;
