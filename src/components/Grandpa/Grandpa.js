import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('Marit Ring');

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const ring = 'diamond ring';
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className='grandpa'>
        <h2>Grandpa</h2>
        <section className='flex'>
          <Father house={house} ring={ring}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;

/* 
Context api
1. declare a context
2. set provider
3. useContext() hook in the place where you want to get the context
*/