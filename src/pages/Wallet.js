import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          Email:
          {' '}
          {email}
        </p>
        <p data-testid="total-field">despesa: 0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: propTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
