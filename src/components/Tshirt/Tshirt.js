import React from 'react';
import './Tshirt.css';

const Tshirt = ({tshirt, handleAddToCart}) => {
  const {id, name, picture, price} = tshirt;
  return (
    <div className='t-shirt'>
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <h4>Price: ${price}</h4>
      <button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
    </div>
  );
};

export default Tshirt;