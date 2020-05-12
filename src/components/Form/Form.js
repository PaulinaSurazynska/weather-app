import React from 'react';
import style from './Form.module.scss';

const Form = () => {
  return (
    <>
      <div className={style.wrapper}>
        <form className={style.form}>
          <h1 className={style.title}>Weather app</h1>
          <input className={style.input} placeholder="enter a city" />
          <button className={style.button} type="submit">
            get weather
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
