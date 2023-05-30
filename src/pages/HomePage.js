import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asyncPopulateLeaderboardsAndThreads from '../states/shared/action';
import ThreadCard from '../components/ThreadCard';
import homePageStyles from '../styles/home-page-styles';

function HomePage() {
  const {
    threads = [],
    authUser,
    users = [],
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncPopulateLeaderboardsAndThreads());
  }, [dispatch]);

  return (
    <div style={homePageStyles.homeWrapper}>
      <h2 style={homePageStyles.textCenter}>Forum App</h2>
      <div style={homePageStyles.contentWrapper}>
        {threads.map((thread) => (
          <ThreadCard {...thread} users={users} userId={authUser?.id ?? ''} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
