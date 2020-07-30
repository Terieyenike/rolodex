import React from 'react';
import style from '../../styles.module.css';

export const SearchBox = ({ value, handleChange }) => (
  <div className={style.input__container}>
    <input
      aria-label='Search, Filter Robots'
      value={value}
      onChange={handleChange}
      className={style.input}
      placeholder={'Search Monsters'}
    />
  </div>
);
