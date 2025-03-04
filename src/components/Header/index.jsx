import React from 'react';
import DeliveryOptions from '../DeliveryOptions';
import Button from '../Button';
import CartBtn from '../CartBtn';
import { Logo } from '../icons/Logo';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <div className='foodie-logo'>
          <Logo />
        </div>
      </div>
      <div className='delivery-options-parent'>
        <DeliveryOptions />
        <Button variant='secondary address-btn'>
          <i className='food-adress address-btn'></i> 8330 Fremont Ave
        </Button>
      </div>
      <div className='icon-button-parent'>
        <CartBtn />
        <Button variant='secondary'>Sign in</Button>
        <Button>Create account</Button>
      </div>
    </header>
  );
};

export default Header;
