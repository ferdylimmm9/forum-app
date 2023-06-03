import RegisterForm from '../components/RegisterForm';
export default {
  component: RegisterForm,
  title: 'Register Form',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    onRegister: ({ email, name, password }) => {},
  },
};
