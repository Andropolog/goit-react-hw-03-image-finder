import React from 'react';
import styles from '../styles.module.css';

const ButtonMore = ({ tittle, onClick }) => (
  <button onClick={onClick} className={styles.LoadMoreButton}>
    {tittle}
  </button>
);

ButtonMore.propTypes = {
  tittle: PropTypes.string,
  onClick: PropTypes.func,
}

export default ButtonMore;