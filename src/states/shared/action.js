/**
 * @TODO: Define all the actions (creator) that uses a combination of actions from various domain
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveLeaderboardActionCreator } from '../leaderboards/action';

export default function asyncPopulateLeaderboardsAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderboard();
      const threads = await api.getAllThreads();

      dispatch(receiveLeaderboardActionCreator(leaderboards));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
