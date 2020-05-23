import React, { useState } from 'react';
import axios from 'axios';
import { getWeather, getIcon } from 'utils/api';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Forecast from 'components/Forecast/Forecast';
import styles from './Form.module.scss';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [icon, setIcon] = useState('');
  const [isForecast, setForecast] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // toggle error mesage display
    if (error) setError(!error);
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
        // if you already show some forecast, do nothing
        if (isForecast) return;
        // pretty please show the forecast
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
          <Input handleInputChange={handleInputChange} />
          <Button />
          {error && (
            <p className={styles.error}>
              Incorrect city name, please try again
            </p>
          )}
        </form>
      </div>
      <div className={styles.forecast}>
        {isForecast ? (
          <Forecast city={data.name} temp={data.main.temp} icon={icon} />
        ) : (
          <h2 className={styles.info}>There is no forecast</h2>
        )}
      </div>
    </>
  );
};

export default Form;
