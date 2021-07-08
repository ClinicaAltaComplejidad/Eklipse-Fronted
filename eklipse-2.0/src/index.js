import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DataProvider} from './context/LoginContext';
//libraries
import { ChakraProvider } from '@chakra-ui/react';


ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
    <DataProvider>
      <App />
    </DataProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
