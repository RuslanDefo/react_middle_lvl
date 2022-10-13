import React from 'react';
import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles.root}>
      <span className={styles.smile}>😕</span>
    <h1>Ничего не найдено :(</h1>
    </div>
  );
}

export default NotFound;