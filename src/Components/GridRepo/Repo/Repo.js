import { RepoDiv, RepoFlex, Container } from './Repo.style';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';

const Repo = ({ enlace, name, watchers, forks, language, id }) => {
  //Componente que renderiza el repositorio recibiendo props
  return (
    <RepoDiv key={id}>
      <a href={enlace} target="_blank" rel="noreferrer">
        <h2>{name}</h2>
      </a>

      <RepoFlex>
        <Container>
          <AiOutlineStar />
          <p>{watchers} stars</p>
        </Container>
        <Container>
          <AiOutlineFork />
          <p>{forks} forks</p>
        </Container>

        <p className="subrayar">{language}</p>
      </RepoFlex>
    </RepoDiv>
  );
};

export default Repo;
