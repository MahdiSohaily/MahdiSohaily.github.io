import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './templates/root.css';
import './templates/reset.css';
import './templates/utility.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
