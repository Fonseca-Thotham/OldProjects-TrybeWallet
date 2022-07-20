// import store from "../store";
export const LOGIN = 'LOGIN';

export const actLog = (email) => ({ type: LOGIN, email });

export const currency = (currencie) => ({
    type: CURRENCY, currencie
});
