import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const allreducers = combineReducers({ user, wallet });

export default allreducers;
