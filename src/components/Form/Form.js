import React, { useState } from 'react';
import axios from 'axios';
import { getWeather, getIcon } from 'utils/api';
import styles from './Form.module.scss';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [icon, setIcon] = useState('');
  const [isForecast, setForecast] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (error) {
      setError(!error);
    }
  };

  const getWeatherIcon = (iconId) => {
    axios
      .get(getIcon(iconId))
      .then((res) => setIcon(res.config.url))
      .catch((err) => console.log(err));
  };

  const getTheWeather = (e) => {
    e.preventDefault();
    axios
      .get(getWeather(inputValue))
      .then((response) => response.data)
      .then((res) => {
        setData({ ...res });
        if (isForecast) {
          return;
        }
        setForecast(!isForecast);
        getWeatherIcon(res.weather[0].icon);
      })
      .catch(() => setError(!error));

    e.target.reset();
  };

  return (
    <>
      <div className={styles.wrapper}>
        <form onSubmit={getTheWeather} className={styles.form}>
          <h1 className={styles.title}>Weather app</h1>
          <input
            required
            className={styles.input}
            placeholder="enter a city"
            onChange={handleInputChange}
            autoComplete="off"
            name="name"
          />
          <button className={styles.button} type="submit">
            get weather
          </button>
          {error && (
            <p className={styles.error}>
              Incorrect city name, please try again
            </p>
          )}
        </form>
      </div>
      <div className={styles.forecast}>
        {isForecast ? (
          <>
            <p className={styles.city}>{data.name} </p>
            <img className={styles.icon} src={icon} alt="icon" />
            <p className={styles.temp}>{data.main.temp.toFixed(0)}&#730;</p>
          </>
        ) : (
          <h2 className={styles.info}>There is no forecast</h2>
        )}
      </div>
    </>
  );
};

export default Form;
