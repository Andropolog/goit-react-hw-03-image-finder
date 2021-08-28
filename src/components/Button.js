import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const Button = ({ tittle, onClick }) => (
  <button onClick={onClick} className={styles.LoadMoreButton}>
    {tittle}
  </button>
);

Button.propTypes = {
  tittle: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;