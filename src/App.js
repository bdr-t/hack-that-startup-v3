import './App.css';
import { useState } from 'react';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './Components/User/User';
import GridRepos from './Components/GridRepo/GridRepos';
import NotFound from './Components/NotFound/NotFound'
import { Grid, GridUser } from './App.style';

function App() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
    setError(false)
  };

  return (
    // <div className="App">
    //   <Login handleChange={handleChange} name={name}/>
    // </div>

    <Router>
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Grid>
                <Login handleChange={handleChange} name={name} />
              </Grid>
            )}
          />
          <Route
            exact
            path="/user"
            render={() => (
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
