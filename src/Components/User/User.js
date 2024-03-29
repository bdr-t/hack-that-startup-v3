import useFetch from '../../Hooks/useFetch';
import Lista from './Lista/Lista';
import Nombre from './Nombre/Nombre';
import { UserContainer, StickyDiv } from './User.style';
import UserFooter from './UserFooter/UserFooter';

const User = ({ name }) => {
  //componente que rendeiz el Perfil del usuario buscado

  //se utiliza el customHook par hacer el fetch
  const { data, status, error } = useFetch(`https://api.github.com/users/${name}`);
  return (
    <StickyDiv>
      {/* esperará a que se obtenga data para renderizar */}
      {data && (
        <UserContainer>
          <img src={data.avatar_url} alt="" width="150px" />

          <Nombre name={data.name} login={data.login} />
          <p>{data.bio}</p>
          <Lista
            repos={data.public_repos}
            location={data.location}
            email={data.email}
            company={data.company}
            blog={data.blog}
          />
          <UserFooter followers={data.followers} following={data.following} />
        </UserContainer>
      )}
    </StickyDiv>
  );
};

export default User;
