/**
 * @TODO: Create Redux store
 */
import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';

import { threadDetailReducer } from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import { leaderboardsReducer } from './leaderboards/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    loadingBar: loadingBarReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    leaderboards: leaderboardsReducer,
    threadDetail: threadDetailReducer,
  },
});

export default store;
