import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//components
import Login from './pages/login/Login';
import { DataContext } from './context/LoginContext';
import Layout from './pages/layout/Layout';
import Header from './components/hearder/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import Table from './pages/tableInvoices/Table';

function App() {

  const { isLogin } = useContext(DataContext);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home">
            <Layout>
              <Header />
              <Main>
                {isLogin.login && <Route exact path="/home/invoices" component={Table} />}
              </Main>
              <Sidebar />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
