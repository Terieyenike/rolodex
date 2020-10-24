import React from 'react';
import style from '../../styles.module.css';

export const Card = ({ name, email, id, company }) => (
  <div className={style.card_box}>
    <img
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
      alt='monster'
    />
    <div className={style.card_details}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{company}</p>
    </div>
  </div>
);
