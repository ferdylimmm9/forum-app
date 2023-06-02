import { useDispatch } from 'react-redux';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };
  return <LoginForm onLogin={onLogin} />;
}

export default LoginPage;
