// React
import React from 'react';
import ReactDOM from 'react-dom';
// App
import App from './app/App';
// Styles
import './index.css';
// Others
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
