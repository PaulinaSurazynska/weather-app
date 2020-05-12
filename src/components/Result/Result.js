import React from 'react';
import style from './Result.module.scss';

const Result = () => (
  <div className={style.forecast}>
    <p className={style.city}>City</p>
    <p className={style.icon}>Icon</p>
    <p className={style.temp}>54</p>
  </div>
);

export default Result;
