import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import store from './store/configureStore';
import './static/styles/style.scss';
import './static/styles/toastr.scss';
import '../node_modules/sweetalert/dist/sweetalert.css';

// window.clientStore = store;
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
