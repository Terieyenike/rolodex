import React from 'react';
import style from '../../styles.module.css';
// import CounterButton from '../CounterButton/CounterButton';

export const SearchBox = ({ handleChange }) => (
  <div className={style.input__container}>
    <input
      aria-label='Search, Filter Robots'
      onChange={handleChange}
      className={style.input}
      placeholder={'Search Monsters'}
    />
    <br />
  </div>
);
