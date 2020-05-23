import React from 'react';
import Form from 'components/Form/Form';
import styles from './Root.modules.scss';

function Root() {
  return (
    <>
      <main className={styles.main}>
        <Form />
      </main>
    </>
  );
}

export default Root;
