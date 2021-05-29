import { FlexForm, Label, Input, Button } from './Login.style';
import { useHistory } from 'react-router-dom';


const Login = (props) => {
  const history = useHistory();

  function handleSubimt(event) {
    event.preventDefault();
    history.push('/user')
  }  

  return (
    <FlexForm>
      <Label htmlFor="username" onSubmit={handleSubimt}>
        Introduzca un nombre de usuario de Github:
      </Label>
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
