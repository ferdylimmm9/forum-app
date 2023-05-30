import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asyncReceiveLeaderboards from '../states/leaderboards/action';
import leaderboardsPageStyles from '../styles/leaderboards-page-styles';

function LeaderboardsPage() {
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <div style={leaderboardsPageStyles.leaderboardWrapper}>
      <h2 style={leaderboardsPageStyles.titleWrapper}>Leaderboards</h2>
      {leaderboards.map((leaderboard) => (
        <div style={leaderboardsPageStyles.contentWrapper} key={leaderboard.id}>
          <div style={leaderboardsPageStyles.userInformationWrapper}>
            <img
              style={leaderboardsPageStyles.avatarWrapper}
              alt={leaderboard.user.id}
              src={leaderboard.user.avatar}
            />
            <div style={leaderboardsPageStyles.textWrapper}>
              <h3>{leaderboard.user.name}</h3>
              <p>{leaderboard.user.email}</p>
            </div>
          </div>
          <p>{leaderboard.score}</p>
        </div>
      ))}
    </div>
  );
}

export default LeaderboardsPage;
