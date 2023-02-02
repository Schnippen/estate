import React from 'react';
import styles from './Card.module.css';

function Card(props) {

  return (
    <li >
      <div className={styles.card_section_item}>
        <div className={styles.card_svg}>{props.svg}</div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button className={styles.card_section_button}>
          {props.buttonDescription}
        </button>
      </div>
    </li>
  );
}

export default Card

