import React from 'react';
import Form from 'components/Form/Form';
import styles from './Root.modules.scss';
import Result from '../components/Result/Result';

function Root() {
  return (
    <>
      <main className={styles.main}>
        <Form />
        <Result />
      </main>
    </>
  );
}

export default Root;
