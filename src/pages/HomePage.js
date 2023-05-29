import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asyncPopulateLeaderboardsAndThreads from '../states/shared/action';
import { asyncAddThread, asyncVoteThread } from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    leaderboards = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncPopulateLeaderboardsAndThreads());
  }, [dispatch]);

  const onAddThread = (body, title, category) => {
    dispatch(asyncAddThread({ body, title, category }));
  };

  const onVoteThread = (threadId, voteType) => {
    dispatch(asyncVoteThread({ threadId, voteType }));
  };

  console.log(threads, leaderboards, authUser);
  return <>HOME</>;
}

export default HomePage;
