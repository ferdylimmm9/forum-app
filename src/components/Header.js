import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'react-feather';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Header() {
  const { authUser = null } = useSelector((states) => states);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menuList = React.useMemo(() => {
    if (authUser) {
      return [
        {
          label: 'Sign in',
          icon: <Icons.LogIn />,
          onClick: () => {
            navigate('/login');
          },
        },
        {
          label: 'Sign up',
          icon: <Icons.UserPlus />,
          onClick: () => {
            navigate('/register');
          },
        },
        {
          label: 'Home',
          icon: <Icons.Home />,

          onClick: () => {
            navigate('/');
          },
        },
        {
          label: 'Leaderboards',
          icon: <Icons.Flag />,
          onClick: () => {
            navigate('/leaderboards');
          },
        },
        {
          label: 'Sign out',
          icon: <Icons.LogOut />,
          onClick: () => {
            dispatch(asyncUnsetAuthUser());
            navigate('/login');
          },
        },
      ];
    }
    return [];
  }, [authUser, dispatch, navigate]);

  return (
    <div>
      {menuList.map((menu) => (
        <button type="button" onClick={menu.onClick}>
          {menu.icon}
        </button>
      ))}
    </div>
  );
}

export default Header;
