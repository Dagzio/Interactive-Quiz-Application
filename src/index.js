import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/Interactive-Quiz-Application">
    <App />
    </Router>
    
  </React.StrictMode>
);
