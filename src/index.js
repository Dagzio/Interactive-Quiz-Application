import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/Interactive-Quiz-Application">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
    </Router>
    
  </React.StrictMode>
);
