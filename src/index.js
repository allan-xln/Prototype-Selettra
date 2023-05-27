import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa o arquivo CSS principal
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);