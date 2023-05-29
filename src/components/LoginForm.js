import PropTypes from 'prop-types';
import * as React from 'react';
import useInput from '../hooks/useInput';

function LoginForm({ onLogin }) {
  const [email, handleEmail] = useInput();
  const [password, handlePassword] = useInput();

  const onSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      onLogin({ email, password });
    },
    [onLogin, email, password]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleEmail}
        placeholder="email"
      />

      <input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="password"
      />
      <input type="submit" />
    </form>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
