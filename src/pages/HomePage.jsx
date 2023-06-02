import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asyncPopulateLeaderboardsAndThreads from '../states/shared/action';
import ThreadCard from '../components/ThreadCard';
import homePageStyles from '../styles/home-page-styles';
import useInput from '../hooks/useInput';

function HomePage() {
  const {
    threads = [],
    authUser,
    users = [],
  } = useSelector((states) => states);

  const [query, handleQuery] = useInput();
  const [category, setCategory] = React.useState('');

  const dispatch = useDispatch();

  const data = React.useMemo(
    () =>
      threads.filter(
        (thread) =>
          (!!thread.title.toLowerCase().includes(query.toLowerCase()) &&
            category === '') ||
          category === thread.category
      ),
    [category, query, threads]
  );

  const categoryList = React.useMemo(
    () => threads.map((thread) => thread.category).filter((value) => !!value),
    [threads]
  );

  const onClickCategory = React.useCallback(
    (item) => () => setCategory((prev) => (prev === item ? '' : item)),
    []
  );

  React.useEffect(() => {
    dispatch(asyncPopulateLeaderboardsAndThreads());
  }, [dispatch]);

  return (
    <div style={homePageStyles.homeWrapper}>
      <h2 style={homePageStyles.textCenter}>Forum App</h2>
      <div style={homePageStyles.contentWrapper}>
        <input
          type="text"
          placeholder="Cari Judul"
          value={query}
          onChange={handleQuery}
          style={homePageStyles.searchWrapper}
        />
        <h3>Kategori Terpopuler</h3>
        <div style={homePageStyles.categoryWrapper}>
          {categoryList.map((item) => (
            <button
              style={{
                ...homePageStyles.categoryButtonDefaultWrapper,
                ...(item === category
                  ? {
                      backgroundColor: 'grey',
                      color: 'white',
                      borderColor: 'grey',
                    }
                  : {
                      backgroundColor: 'transparent',
                      color: 'black',
                      borderColor: 'black',
                    }),
              }}
              type="button"
              key={item}
              onClick={onClickCategory(item)}
            >
              #{item}
            </button>
          ))}
        </div>

        {data.map((thread) => (
          <ThreadCard {...thread} users={users} userId={authUser?.id ?? ''} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
