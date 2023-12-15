import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store/store';
import './styles/index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {App} from './components';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  </React.StrictMode>
);


