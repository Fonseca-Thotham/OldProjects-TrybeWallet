const URL = 'https://economia.awesomeapi.com.br/json/all';

export const LOGIN = 'LOGIN';
const login = (email) => ({ type: LOGIN, email });

export default login;

export const CURRENCY = 'CURRENCY';
export const currency = (currencies) => ({ type: CURRENCY, currencies });

export const fetchCurrency = () => async (dispatch) => {
  const response = await fetch(URL);
  const json = await response.json();
  delete json.USDT;
  const keys = Object.keys(json);
  dispatch(currency(keys));
};

export const HANDLE_EXPENSES = 'HANDLE_EXPENSES';
export const expense = (expenses) => ({ type: HANDLE_EXPENSES, expenses });

export const fetchExpense = (expenses) => async (dispatch) => {
  const response = await fetch(URL);
  const json = await response.json();
  dispatch(expense({ ...expenses, exchangeRates: json }));
};
