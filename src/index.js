// Import necessary dependencies and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// Import the main App component
import { App } from './components';

// Import the Redux store
import store from './redux/store/store';

// Use createRoot to create a separate root for concurrent rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app within the root using React StrictMode and Redux Provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
