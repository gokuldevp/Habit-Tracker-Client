import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {App} from './components';
// Import createStore from Redux for creating the Redux store
import { createStore } from 'redux';
// Import the movies reducer
import rootReducer from './redux/Reducers';
// Create the Redux store using the movies reducer
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);


