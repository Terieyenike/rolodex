import React from 'react';
import { Card } from '../../components/Card/Card';
import style from '../../styles.module.css';

export const CardList = ({ monsters }) => (
  <section className={style.card__section}>
    <div className={style.container}>
      <div className={style.card}>
        {monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    </div>
  </section>
);
