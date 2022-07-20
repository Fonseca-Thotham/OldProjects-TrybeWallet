import CURRENCY from '../actions/index';
const INITIAL_STATE = {};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CURRENCY:
      return {
        ...state,
        currencie: action.currencie
      };
  default:
    return state;
  }
}
