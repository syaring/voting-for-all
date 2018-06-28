import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App.jsx';
import './services/firebase';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
ReactDOM.render(
  <BrowserRouter>
    <App title="VOTE for ALL by SYARING"/>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
