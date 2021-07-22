import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//components
import Login from './pages/login/Login';
import Layout from './pages/layout/Layout';
import Header from './components/hearder/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import TableInvoices from './pages/tableInvoices/Table';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home">
            <Layout>
              <Header />
              <Main>
                <Route exact path="/home/invoices" component={TableInvoices} />
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
