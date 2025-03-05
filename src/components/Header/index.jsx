import React from 'react';
import DeliveryOptions from '../DeliveryOptions';
import Button from '../Button';
import CartBtn from '../CartBtn';
import { Logo } from '../icons/Logo';

const Header = () => {
  return (
    <header data-test='header' className='header'>
      <div className='logo'>
        <div className='foodie-logo'>
          <Logo data-test='logo' />
        </div>
      </div>
      <div className='delivery-options-parent'>
        <DeliveryOptions data-test='options' />
        <Button variant='secondary address-btn' data-test='address-btn'>
          <i className='food-adress address-btn'></i> 8330 Fremont Ave
        </Button>
      </div>
      <div className='icon-button-parent'>
        <CartBtn data-test='cart-button' />
        <Button variant='secondary' data-test='signin-button'>Sign in</Button>
        <Button data-test='signup-button'>Create account</Button>
      </div>
    </header>
  );
};

export default Header;
