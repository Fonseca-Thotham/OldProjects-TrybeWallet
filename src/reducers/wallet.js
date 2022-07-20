import { CURRENCY } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default userReducer;
