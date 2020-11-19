import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  rootReducer,
  {/* write your initial states here */},
  composeWithDevTools(applyMiddleware(thunk))
);

