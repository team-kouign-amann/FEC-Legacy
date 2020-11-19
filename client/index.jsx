import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import store from './store/store.js';

import getMeta from './actions/RatingsOverview/getMeta.js';
import getReview from './actions/RatingsOverview/getReviews.js';
import getProduct from './actions/productOverview/getProduct.js';
import getStyles from './actions/productOverview/getStyles.js';
import getQuestions from './actions/questions.js';
import './styles/style.css';


store.dispatch(getProduct(1))
  .then(() => {
    store.dispatch(getStyles(1));
    store.dispatch(getReview(1));
    store.dispatch(getMeta(1));
    store.dispatch(getQuestions(5));
  })
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, document.getElementById('app'),
        () => getQuestions(5)(store.dispatch),
        // () => getProduct(1)(store.dispatch)
    );
  });
