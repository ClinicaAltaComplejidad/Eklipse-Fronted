import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//components
import Login from './pages/login/Login';
import { DataContext } from './context/LoginContext';
import Test from './components/Test';

function App() {

  const { isLogin } = useContext( DataContext );

  console.log('login ', isLogin);

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/"  component={Login}  />
            { isLogin.login ? <Route exact path="/test" component={Test} /> : <h1>No tienes permisos</h1> }
          </Switch>
      </Router>
    </div>
  );
}

export default App;
