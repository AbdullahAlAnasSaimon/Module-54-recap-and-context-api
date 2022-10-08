import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {

  let message;
  if(cart.length === 0){
    message = <p>Please Buy at least one item</p>
  }else if(cart.length === 1){
    message = <div>
      <h3>Amar jonno ekta naw</h3>
      <p>tomar jonno arekta naw</p>
    </div>
  }
  else{
    message = <p>Thanks for buying!</p>
  }

  return (
    <div>
      <h2>Order Summary</h2>
      <h4>Order Quantity: {cart.length}</h4>
      {
        cart.map(tshirt => <p
        key={tshirt._id}
        >
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>)
      }
      {
        message
      }
      {
        cart.length === 3 ? <p>Tin joner jonno naki?</p> : <p>Aro Kino</p>
      }
      <p>and operator</p>
      {cart.length === 2 && <h2>Double items</h2>}
      <p>or operator</p>
      {cart.length === 4 || <h2>4 ta item naw</h2>}
    </div>
  );
};

export default Cart;

/* 
CONDITIONAL RENERING
1. use element in a variable and then use if-else to set value.
2. ternary operation condition ? true : false.
3. && operator. (if condition is true i want to display something).
4. || operator. (if condition is false i want to display something).
*/