import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import Loading from './components/Loading';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  ); // @TODO: get authUser and isPreLoad state from store

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    // @TODO: dispatch async action to sign out
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  return (
    <div className="App">
      <Header />
      <Loading />
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          {authUser !== null && (
            <Route path="/threads/:id" element={<DetailPage />} />
          )}
        </Routes>
      </main>
    </div>
  );
}

export default App;
