import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './config/firebase.config';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import customTheme from './Theme/theme';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={customTheme} resetCSS>
    <Router>
      <React.StrictMode>
        <AuthProvider>
          <React.Suspense fallback={<span>Falied</span>}>
            <App />
          </React.Suspense>
        </AuthProvider>
      </React.StrictMode>
    </Router>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
