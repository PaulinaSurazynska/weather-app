import React from 'react';
import PropTypes from 'prop-types';
import styles from './Forecast.module.scss';

const Forecast = ({ city, icon, temp }) => {
  return (
    <>
      <p className={styles.city}>{city} </p>
      <img className={styles.icon} src={icon} alt="icon" />
      <p className={styles.temp}>{temp.toFixed(0)}&#730;</p>
    </>
  );
};

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
};

export default Forecast;
