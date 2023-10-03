import React from 'react';
import ReactDOM from 'react-dom/client';
// import Card from './components/Card'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Card /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
