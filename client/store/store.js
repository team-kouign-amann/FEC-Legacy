import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';
import { composeWithDevTools } from 'redux-devtools-extension';

// var initialState = {
//   currentQuestions: {
//     data: [
//       {
//         question_body: 'N/A',
//         answers: {
//           body: 'N/A',
//           answerer_name: 'N/A',
//           date: 'N/A',
//           helpfulness: 0,
//         },
//       },
//     ],
//     id: 1,
//   },
// };

export default createStore(
  rootReducer,
  // initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
