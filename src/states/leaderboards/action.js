import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { toasterOptions } from '../../utils/constant';

export const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};
export function receiveLeaderboardActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

export default function asyncReceiveLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderboard();
      dispatch(receiveLeaderboardActionCreator(leaderboards));
    } catch (error) {
      toast.error(error.message, toasterOptions);
      throw new Error(error.message);
    }
    dispatch(hideLoading());
  };
}
