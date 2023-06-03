import LoginForm from '../components/LoginForm';

export default {
  component: LoginForm,
  title: 'Login Form',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    onLogin: ({ email, password }) => {},
  },
};
