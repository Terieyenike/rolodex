import React, { useState, useEffect } from 'react';
import { SearchBox } from './components/SearchBox/SearchBox';
import { CardList } from './components/CardList/CardList';
import { Footer } from './components/Footer/Footer';
import oval from './images/oval.svg';

import style from './styles.module.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMonsters();
  }, []);

  const fetchMonsters = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setMonsters(data);
    setLoading(false);
  };

  const searchMonsters = (e) => {
    setSearchField(e.target.value);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <React.Fragment>
      <div className={style.header}>
        <h1>Monster Rolodex</h1>
        <SearchBox value={searchField} handleChange={searchMonsters} />
      </div>
      {loading ? (
        <div className={style.img}>
          <img src={oval} alt='' />
        </div>
      ) : (
        <CardList monsters={filteredMonsters} />
      )}
      <Footer />
    </React.Fragment>
  );
};

export default App;
