import PropTypes from 'prop-types';
import * as React from 'react';
import useInput from '../hooks/useInput';
import registerFormStyles from '../styles/register-form-styles';

function RegisterForm({ onRegister }) {
  const [email, handleEmail] = useInput();
  const [password, handlePassword] = useInput();
  const [name, handleName] = useInput();

  const onSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      onRegister({ email, password, name });
    },
    [onRegister, email, password, name],
  );
  return (
    <form onSubmit={onSubmit} style={registerFormStyles.formWrapper}>
      <h2>Register Page</h2>
      <input
        type="name"
        value={name}
        onChange={handleName}
        placeholder="name"
        style={registerFormStyles.inputWrapper}
      />
      <input
        type="email"
        value={email}
        onChange={handleEmail}
        placeholder="email"
        style={registerFormStyles.inputWrapper}
      />
      <input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="password"
        style={registerFormStyles.inputWrapper}
      />
      <button style={registerFormStyles.submitButtonWrapper} type="submit">
        Register
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterForm;
