import { FlexForm, Label } from "./Login.style";

const Login = () => {
  return (
    <FlexForm>
      <Label htmlFor="username">Introduzca su nombre de usuario de Github:</Label>
      <input type="text" id="username" name="username" placeholder='nombre de usuario'/>
      <button type="submit">Buscar</button>
    </FlexForm>

  );
};

export default Login;
