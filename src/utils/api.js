/* eslint-disable import/prefer-default-export */
export const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeather = (input) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`;

export const getIcon = (icon) => `http://openweathermap.org/img/w/${icon}.png`;
