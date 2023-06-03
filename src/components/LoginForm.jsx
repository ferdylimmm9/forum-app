import PropTypes from 'prop-types';
import * as React from 'react';
import { SignIn } from '@phosphor-icons/react';
import useInput from '../hooks/useInput';
import loginFormStyles from '../styles/login-form-styles';

function LoginForm({ onLogin }) {
  const [email, handleEmail] = useInput();
  const [password, handlePassword] = useInput();

  const onSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      onLogin({ email, password });
    },
    [onLogin, email, password],
  );

  return (
    <form onSubmit={onSubmit} style={loginFormStyles.formWrapper}>
      <h2>Login Page</h2>
      <input
        type="email"
        value={email}
        onChange={handleEmail}
        placeholder="email"
        style={loginFormStyles.inputWrapper}
      />

      <input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="password"
        style={loginFormStyles.inputWrapper}
      />
      <button style={loginFormStyles.submitButtonWrapper} type="submit">
        Login
        <SignIn size={16} />
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
