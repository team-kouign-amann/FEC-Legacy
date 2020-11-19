import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import store from './store/store.js';
import getProduct from './actions/productOverview/getProduct.js'
import getStyles from './actions/productOverview/getStyles.js';

store.dispatch(getProduct(3))
  .then(() => (
    store.dispatch(getStyles(3))
  ))
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, document.getElementById('app'),
    );
  });
