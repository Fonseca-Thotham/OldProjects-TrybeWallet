export const LOGIN = 'LOGIN';
export const actLog = (email) => ({ type: LOGIN, email });

export const CURRENCY = 'CURRENCY';
export const currency = (currencies) => ({ type: CURRENCY, currencies });

export const fetchCurrency = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  delete json.USDT;
  const keys = Object.keys(json);
  dispatch(currency(keys));
};
