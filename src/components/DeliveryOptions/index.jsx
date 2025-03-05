import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import * as motion from 'motion/react-client';
import { DeliveryIcon } from '../icons/DeliveryIcon';
import { PickupIcon } from '../icons/PickupIcon';

const DeliveryOptions = () => {
  const [isPickup, setIsPickup] = useState(false);

  const toggleSwitch = () => setIsPickup(!isPickup);
  return (
    <button
      className='toggle-container'
      data-pickup={isPickup ? 'pickup' : 'delivery'}
      onClick={toggleSwitch}
    >
      <motion.div
        className='toggle-handle'
        layout
        transition={{ type: 'spring', visualDuration: 0.2, bounce: 0.2 }}
      />
      <div className='delivery-option toggle-option'>
        <DeliveryIcon isPickup={isPickup} className='toggle-icon' />
        <span className='toggle-text'>Delivery</span>
      </div>
      <div className='pickup-option toggle-option'>
        <PickupIcon isPickup={isPickup} className='toggle-icon' />
        <span className='toggle-text'>Pickup</span>
      </div>
    </button>
  );
};

export default DeliveryOptions;
