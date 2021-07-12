import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//components
import Login from './pages/login/Login';
import { DataContext } from './context/LoginContext';
import Test from './components/Test';
import LayoutSidebar from './pages/sidebarLayout/LayoutSidebar';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';
import Table from './components/table/Table';

function App() {

  const { isLogin } = useContext(DataContext);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home">
            <LayoutSidebar>
              <Header />
              <Main>
                {/*isLogin.login ? <Route path="/home/test" component={Test} /> : <h1>No tienes permisos</h1>*/}
                {<Route path="/home/invoices" component={Table} />}
              </Main>
              <Sidebar />
            </LayoutSidebar>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
