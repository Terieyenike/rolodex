import React from 'react';
import style from '../../styles.module.css';

export const Card = ({ monster }) => (
  <div className={style.card_box}>
    <img
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      alt='monster'
    />
    <div className={style.card_details}>
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
      <p>{monster.company.catchPhrase}</p>
    </div>
  </div>
);
