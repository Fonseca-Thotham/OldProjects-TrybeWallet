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
        <p data-testid="email-field">
          Email:
          {' '}
          {email}
        </p>
        <p data-testid="total-field">despesa: 0</p>
        <p data-testid="header-currency-field">
          moeda:
          { 'BRL' }
          { currency }
        </p>
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
