import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';

import store from './store/store.js';
import getReview from './actions/RatingsOverview/getReviews.js';

store.dispatch(getReview(2))
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, document.getElementById('app'),
    );
  });
