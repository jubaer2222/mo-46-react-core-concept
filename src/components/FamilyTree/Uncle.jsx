import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
  return (
    <div>
      <h3>Uncle</h3>
      <section className='flex'>
        <Cousin name='Rafsan'></Cousin>
        <Cousin name='Rafi'></Cousin>
      </section>
    </div>
  );
};

export default Uncle;