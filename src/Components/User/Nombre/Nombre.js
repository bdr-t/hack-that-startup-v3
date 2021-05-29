import { Name, UserName } from "./Nombre.style";

const Nombre = ({ name, login }) => {
   // renderiza nombre y nombre usuario
    return (
      <div>
        <Name>{name}</Name>
        <UserName>@{login}</UserName>
      </div>
    );
  };
  
  export default Nombre;
  