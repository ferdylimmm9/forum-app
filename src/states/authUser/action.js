import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { toasterOptions } from '../../utils/constant';

export const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

export function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

export function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

export function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();

      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      toast.error(error.message, toasterOptions);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken('');
    dispatch(hideLoading());
    toast.success('user has logged out', toasterOptions);
  };
}
export function asyncRegisterUser({ email, name, password }) {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      await api.register({ email, name, password });
    } catch (error) {
      toast.error(error.message, toasterOptions);
    } finally {
      dispatch(hideLoading());
    }
  };
}
