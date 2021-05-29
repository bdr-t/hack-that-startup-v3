import { Name, UserName } from "./Nombre.style";

const Nombre = ({ name, login }) => {
    return (
      <div>
        <Name>{name}</Name>
        <UserName>@{login}</UserName>
      </div>
    );
  };
  
  export default Nombre;
  