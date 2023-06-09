import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import moment from 'moment';
import { ToastContainer } from 'react-toastify';
import { asyncPreloadProcess } from './states/isPreload/action';
import Loading from './components/Loading';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Navigation from './components/Navigation';
import './styles/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import AddThreadPage from './pages/AddThreadPage';

function App() {
  moment.locale('id');
  const { isPreload = false, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <div className="App">
      <main className="main-container">
        <Loading />
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          {authUser !== null && (
            <Route path="/threads" element={<AddThreadPage />} />
          )}
        </Routes>
        <Navigation />
      </main>
    </div>
  );
}

export default App;
