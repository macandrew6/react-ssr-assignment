import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import data from './data/data.json';

// initial state
const startState = {
  cards: []
};

// actions
export const initialCards = () => {
  return {
    type: 'INITIAL_CARDS',
    cards: data
  };
};

export const addItem = (item) => {
  return {
    type: 'ADD',
    item
  };
};

// Reducers
export const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL_CARDS':
      return {
        cards: action.cards
      };
    case 'ADD':
      return {
        ...state,
        cards: [...state.cards, action.item]
      };
    default: 
      return state;
  }
};

// create store
export const initStore = (initState = startState) => {
  return createStore(
    reducer,
    initState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};