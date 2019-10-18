import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunkMiddleware } from 'redux-thunk';
import data from './data/data.json';

// initial state
const startState = {
  cards: []
};

// create store
export const initStore = (initState = startState) => {
  return createStore(
    reducer,
    initState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};