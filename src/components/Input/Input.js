import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ handleInputChange }) => {
  return (
    <input
      required
      className={styles.input}
      placeholder="enter a city"
      onChange={handleInputChange}
      autoComplete="off"
      name="name"
    />
  );
};

Input.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};

export default Input;
