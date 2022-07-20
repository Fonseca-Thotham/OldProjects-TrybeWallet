import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchCurrency, fetchExpense } from '../actions';

class Wallet extends React.Component {
  state = {
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'alimentação',
  }

  componentDidMount() {
    const { getCurrencyDispatch } = this.props;
    getCurrencyDispatch();
  }

  clearSate = () => {
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'alimentação',
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleTotal = () => {
    const { expense } = this.props;
    const total = expense.reduce((prevVal, currVal) => prevVal + Number(
      currVal.exchangeRates[currVal.currency].ask * currVal.value,
    ), 0);
    return total;
  }

  handleClick = () => {
    const { getExpenseDispatch } = this.props;
    getExpenseDispatch({ ...this.state });
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
    this.clearSate();
  }

  render() {
    const { email, currencie, expense } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            Email:
            {' '}
            {email}
          </p>
          <p data-testid="total-field">
            {this.handleTotal().toFixed(2) }
          </p>
          <p data-testid="header-currency-field">
            moeda:
            {' '}
            BRL
          </p>
        </header>
        <hr />
        <main>
          <label htmlFor="value">
            Valor:
            {' '}
            <input
              data-testid="value-input"
              type="number"
              id="value"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            {' '}
            <input
              data-testid="description-input"
              type="text"
              id="description"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            {' '}
            <select
              id="currency"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              { currencie.map((currencies, index) => (
                <option value={ currencies } key={ index }>{currencies}</option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamentos:
            {' '}
            <select
              data-testid="method-input"
              id="method"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            {' '}
            <select
              data-testid="tag-input"
              id="tag"
              value={ tag }
              name="tag"
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </main>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {
            expense.map((expenses, index) => (
              <tr key={ index }>
                <td>{expenses.description}</td>
                <td>{expenses.tag}</td>
                <td>{expenses.method}</td>
                <td>{Number(expenses.value).toFixed(2)}</td>
                <td>{[expenses.exchangeRates[expenses.currency].name]}</td>
                <td>
                  {
                    Number(expenses.exchangeRates[expenses.currency].ask).toFixed(2)
                  }
                </td>
                <td>
                  {Number(expenses.value * expenses.exchangeRates[expenses.currency]
                    .ask).toFixed(2)}

                </td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                </td>
                <td>
                  <button type="button">Deletar</button>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencie: state.wallet.currencies,
  expense: state.wallet.expenses,

});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyDispatch: () => dispatch(fetchCurrency()),
  getExpenseDispatch: (expenses) => dispatch(fetchExpense(expenses)),
});

Wallet.propTypes = {
  email: propTypes.string.isRequired,
  currencie: propTypes.string.isRequired,
  expense: propTypes.string.isRequired,
  getCurrencyDispatch: propTypes.func.isRequired,
  getExpenseDispatch: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
