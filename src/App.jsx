import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// bring in the asynchronous fetchMonsters action
import { fetchMonsters, setSearchField } from './actions/robotsActions';
import { SearchBox } from './components/SearchBox/SearchBox';
import { CardList } from './components/CardList/CardList';
// import { Footer } from './components/Footer/Footer';
import oval from './images/oval.svg';

import style from './styles.module.css';

const App = ({ dispatch, loading, monsters, searchField }) => {
  useEffect(() => {
    dispatch(fetchMonsters());
  }, [dispatch]);

  const searchMonsters = (e) => {
    dispatch(setSearchField(e.target.value));
  };

  const filterMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <React.Fragment>
      <div className={style.header}>
        <h1>Monster Rolodex</h1>
        <SearchBox handleChange={searchMonsters} />
      </div>
      {loading ? (
        <div className={style.img}>
          <img src={oval} alt='loading spinner' />
        </div>
      ) : (
        <CardList monsters={filterMonsters} />
      )}
      {/* <Footer /> */}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.monsters.loading,
  monsters: state.monsters.monsters,
  // hasErrors: state.monsters,
  searchField: state.text.searchField,
});

export default connect(mapStateToProps)(App);
