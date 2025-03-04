import React from 'react';
import { ShoppingCartIcon } from '../icons/ShoppingCartIcon';

const CartBtn = (props) => {
  return (
    <button className='cart-btn'>
      <div className='icon-button-child' />
      <div className='icon-button-wrapper'>
        <i className='food-shopping-cart-icon'></i>
        {props.items && props.items.length ? (
          <div className='badge'>
            <div className='item-count'>{props.items.length}</div>
          </div>
        ) : (
          <div className='badge'>
            <div className='item-count'>0</div>
          </div>
        )}
      </div>
    </button>
  );
};

export default CartBtn;
