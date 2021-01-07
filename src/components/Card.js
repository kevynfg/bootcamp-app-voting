import React from 'react';
import css from './card.module.css';

export default function Card({ children }) {
  const classes = `card ${css.cardExtra}`;
  /*Trago o conteúdo de dentro
  da tag Card em candidates em forma de Children */
  return <div className={classes}>{children}</div>;
}
