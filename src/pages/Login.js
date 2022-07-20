import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actLog from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeUser = ({ target }) => {
    // const { user, value } = target;
    this.setState({ [target.name]: target.value });
  };

 onClickChange = () => {
   const { login, history } = this.props;
   const { email } = this.state;
   login(email);
   history.push('/carteira');
 };

 validation= () => {
   const { email, password } = this.state;
   const minreq = 5;
   const validformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;
   return !(password.length > minreq && validformat.test(email));
 }

 render() {
   const { email, password } = this.state;
   return (
     <form>
       <label htmlFor="email">
         <input
           type="email"
           name="email"
           data-testid="email-input"
           defaultvalue={ email }
           onChange={ this.onChangeUser }
           placeholder="E-mail"
         />
       </label>
       <label htmlFor="password">
         <input
           type="password"
           name="password"
           data-testid="password-input"
           defaultvalue={ password }
           onChange={ this.onChangeUser }
           placeholder="Password"
         />
       </label>
       <button
         type="button"
         onClick={ this.onClickChange }
         disabled={ this.validation() }
       >
         Entrar
       </button>
     </form>
   );
 }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(actLog(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html

export default connect(null, mapDispatchToProps)(Login);
