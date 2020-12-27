import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SearchBox } from './components/SearchBox/SearchBox';
import { CardList } from './components/CardList/CardList';
// import { Footer } from './components/Footer/Footer';
import oval from './images/oval.svg';

import style from './styles.module.css';

// bring in the asynchronous fetchMonsters action
import { fetchMonsters, setSearchField } from './actions/robotsActions';

const App = ({ dispatch, loading, monsters, searchField, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchMonsters());
  }, [dispatch]);

  const searchMonsters = (e) => {
    dispatch(setSearchField(e.target.value));
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const renderMonsters = () => {
    if (loading) {
      return (
        <div className={style.img}>
          <img src={oval} alt='' />
        </div>
      );
    }
    if (hasErrors) {
      return (
        <div className={style.img}>
          <p>Unable to display monsters</p>
          <p>connect to world wide web.</p>
        </div>
      );
    }
    return <CardList monsters={filteredMonsters} />;
  };

  return (
    <React.Fragment>
      <div className={style.header}>
        <h1 style={{ fontSize: '3.5rem', color: '#0ccac4' }}>
          Monster Rolodex
        </h1>
        <SearchBox handleChange={searchMonsters} />
      </div>
      {renderMonsters()}
      {/* <Footer /> */}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.monsters.loading,
  monsters: state.monsters.monsters,
  hasErrors: state.monsters.hasErrors,
  searchField: state.text.searchField,
});

export default connect(mapStateToProps)(App);
