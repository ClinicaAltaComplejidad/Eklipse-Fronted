import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//components
import Header from './components/hearder/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import Layout from './pages/layout/Layout';
import TableInvoices from './pages/tableInvoices/Table';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Layout>
              <Header />
              <Main>
                <Route exact path="/" component={TableInvoices} />
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
