import './App.css';
import { useState } from 'react';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './Components/User/User';
import GridRepos from './Components/GridRepo/GridRepos';
import NotFound from './Components/NotFound/NotFound'
import { Grid, GridUser } from './App.style';

function App() {
  //Uso react state para almacenar el nombre para poder pasarlo como props a otros comopnentes
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  //Utilizo handleChange para almacenar el nombre que se escribe en el input

  const handleChange = (e) => {
    setName(e.target.value);
    setError(false)
  };

  return (

    <Router>
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              //renderizo Login componente con handleCchange y name como props
              <Grid>
                <Login handleChange={handleChange} name={name} />
              </Grid>
            )}
          />
          <Route
            exact
            path="/user"
            render={() => (
              // renderizo compoente User y GridRepos con name como props
              <GridUser>
                <User name={name} />
                <GridRepos name={name} />
              </GridUser>
            )}
          />

          <Route
            exact
            path="/notFound"
            render={() => (
              //renderizo not found con handleChange y name, porque se los volveré a pasar a login
              <Grid>
                <NotFound handleChange={handleChange} name={name} />
              </Grid>
            )}
          />
        </Switch>
      </>
    </Router>
  );
}

export default App;
