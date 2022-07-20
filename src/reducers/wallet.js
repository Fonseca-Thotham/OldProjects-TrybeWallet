import { CURRENCY, HANDLE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  id: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY:
    return { ...state, currencies: action.currencies };
  case HANDLE_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.expenses] };
  default:
    return state;
  }
};

export default walletReducer;
