import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchCurrency } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencydDispatch } = this.props;
    currencydDispatch();
  }

  render() {
    const { email, currency } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            Email:
            {' '}
            {email}
          </p>
          <p data-testid="total-field">despesa: 0</p>
          <p data-testid="header-currency-field">
            moeda:
            {' '}
            BRL
          </p>
        </header>
        <label htmlFor="despesas">
          Valor:
          {' '}
          <input
            data-testid="value-input"
            type="number"
            id="despesa"
          />
        </label>
        <label htmlFor="despesaid">
          Descrição:
          {' '}
          <input
            data-testid="description-input"
            type="text"
            id="despesaid"
          />
        </label>
        <label htmlFor="currencyid">
          Moeda:
          {' '}
          <select id="currencyid">
            {currency.map((currencies, index) => (
              <option value={ currencies } key={ index }>{currencies}</option>
            ))}
          </select>
        </label>
        <label htmlFor="currencyid">
          Método de pagamentos:
          {' '}
          <select data-testid="method-input" id="currencyid">
            <option>
              Dinheiro
            </option>
            <option>
              Cartão de crédito
            </option>
            <option>
              Cartão de débito
            </option>
          </select>
        </label>
        <label data-testid="tag-input" htmlFor="currencyid">
          Categoria:
          {' '}
          <select id="currencyid">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currency: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencydDispatch: () => dispatch(fetchCurrency()),
});

Wallet.propTypes = {
  email: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
  currencydDispatch: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
