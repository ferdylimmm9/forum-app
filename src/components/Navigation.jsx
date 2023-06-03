import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Crown,
  House,
  Plus,
  SignIn,
  SignOut,
  UserPlus,
} from '@phosphor-icons/react';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import navigationStyles from '../styles/navigation-styles';

function Navigation() {
  const { authUser = null } = useSelector((states) => states);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuList = React.useMemo(
    () => [
      {
        label: 'Home',
        icon: <House size={24} />,

        onClick: () => {
          navigate('/');
        },
      },
      {
        label: 'Leaderboards',
        icon: <Crown size={24} />,
        onClick: () => {
          navigate('/leaderboards');
        },
      },
      ...(authUser === null
        ? [
            {
              label: 'Register',
              icon: <UserPlus size={24} />,
              onClick: () => {
                navigate('/register');
              },
            },
            {
              label: 'Login',
              icon: <SignIn size={24} />,
              onClick: () => {
                navigate('/login');
              },
            },
          ]
        : [
            {
              label: 'Add Thread',
              icon: <Plus size={24} />,
              onClick: () => {
                navigate('/threads');
              },
            },
            {
              label: 'Logout',
              icon: <SignOut size={24} />,
              onClick: () => {
                dispatch(asyncUnsetAuthUser());
                navigate('/login');
              },
            },
          ]),
    ],
    [authUser, dispatch, navigate],
  );

  return (
    <div style={navigationStyles.navigationWrapper}>
      <div style={navigationStyles.actionWrapper}>
        {menuList.map((menu) => (
          <button
            style={navigationStyles.menuWrapper}
            key={`header-${menu.label}`}
            type="button"
            onClick={menu.onClick}
          >
            {menu.icon}
            {menu.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
