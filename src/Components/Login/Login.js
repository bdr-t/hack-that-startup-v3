import { FlexForm, Label, Input, Button } from './Login.style';
import { useHistory } from 'react-router-dom';


const Login = (props) => {
  // componente que sireve como buscador del usuario de reddit

  //utilizo useHistory para redirigir sin perder state de App
  const history = useHistory();


  // cuando se le da a buscar (enter o clickando en el boton), redirige a la ruta User
  function handleSubimt(event) {
    event.preventDefault();
    history.push('/user')
  }  

  return (
    // Form
    <FlexForm>
      <Label htmlFor="username" onSubmit={handleSubimt}>
        Introduzca un nombre de usuario de Github:
      </Label>
      {/* si en porps se le pasa error, significa que se ha intentado buscar usuario que no existe y se muestra un texto diciendolo*/}
      {props.error && <p>No se ha encontrado ese nombre de usuario</p>}
      <Input
        onChange={props.handleChange}
        type="text"
        id="username"
        name="username"
        placeholder="nombre de usuario"
      />
      <Button type='submit' onClick={handleSubimt}>Buscar</Button>
    </FlexForm>
  );
};

export default Login;
