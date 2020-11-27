import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import store from './store/store.js';
import getProduct from './actions/productOverview/getProduct.js'
import getStyles from './actions/productOverview/getStyles.js';
import getQuestions from './actions/questionsOverview/getQuestions.js';
// import moreQuestions from './actions/moreQuestions.js';
// import moreAnswers from './actions/moreAnswers.js';
// import getTotalQuestions from './actions/getTotal.js';
import getMeta from './actions/RatingsOverview/getMeta.js';
import getReview from './actions/RatingsOverview/getReviews.js';
import './styles/style.css';





store.dispatch(getProduct(1))
  .then(() => {
    store.dispatch(getStyles(1));
    store.dispatch(getReview(1));
    store.dispatch(getMeta(1));
    // store.dispatch(getQuestions(5))
  }).then(() => {
    return store.dispatch(getQuestions(3, 50))
  })
  // .then((data) => {
  //   console.log('allQuestions', data);
  //   let questionIds = {};
  //   for (let i = 0; i < data.length; i++) {
  //     questionIds[data[i].question_id] = true;
  //   }
  //   console.log('Questionids', questionIds);
  //   dispatch({
  //     type: 'SHOW_ANSWERS',
  //     answerBoolean: questionIds,
  //   })
  // })
  // .then((data) => {
  //   console.log('huol', data)
  //   return [store.dispatch(moreQuestions(data[0], 4)), data[1]]
  // })
  // .then((data) => {
  //   console.log('reducedQuestions', data[0])
  //   console.log('allAnswers', data[1])
  //   store.dispatch(moreAnswers(data[1], data[0], true))
  // })
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, document.getElementById('app'),
        // () => getQuestions(5)(store.dispatch),
        // () => getProduct(1)(store.dispatch)
    );
  });
