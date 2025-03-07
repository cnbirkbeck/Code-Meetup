import { createStore, compose, applyMiddleware } from "redux";

import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';
import { getAuthState } from "../../utils/localStorageHelper";
import { initialEventDetailState } from '../initialState'

// Store initial logged in credentials if available on page reload in Redux store
const loadState = () => {
  try {
    const serializedState = getAuthState();
    if (serializedState === null) {
      return {
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        token: ''
      }
    }
    return serializedState;
  } catch (err) {
    return undefined;
  }
};

export default createStore(
  rootReducer,
  {
    authState: loadState(), // Load local storage into initial state on page load
    eventDetail: initialEventDetailState,
  },

  compose(
    applyMiddleware(thunk), // thunk allows for asynchronous actions
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
