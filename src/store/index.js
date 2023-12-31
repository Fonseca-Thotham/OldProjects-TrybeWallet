import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allreducers from '../reducers';

const store = createStore(allreducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
