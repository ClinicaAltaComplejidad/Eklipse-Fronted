import React from 'react';
//components
import Login from './pages/login/Login';
import { DataProvider } from './context/LoginContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Login />
      </DataProvider>
    </div>
  );
}

export default App;
