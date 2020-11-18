import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/main.js';

export default createStore(
  rootReducer,
  {/* write your initial states here */},
  composeWithDevTools(applyMiddleware(thunk)),

);
