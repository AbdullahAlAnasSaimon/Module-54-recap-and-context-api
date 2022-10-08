import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h4>Friend</h4>
      <p><small>Gift: {ring}</small></p>
    </div>
  );
};

export default Friend;