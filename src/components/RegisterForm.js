import PropTypes from 'prop-types';
import * as React from 'react';
import useInput from '../hooks/useInput';

function RegisterForm({ onRegister }) {
  const [email, handleEmail] = useInput();
  const [password, handlePassword] = useInput();
  const [name, handleName] = useInput();

  const onSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      onRegister({ email, password, name });
    },
    [onRegister, email, password, name]
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
        type="name"
        value={name}
        onChange={handleName}
        placeholder="name"
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

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterForm;
