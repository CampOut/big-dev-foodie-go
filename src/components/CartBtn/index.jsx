import React, { useState, useRef } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const CartEmpty = React.forwardRef(
  ({ popper, children, show: _, ...props }, ref) => {
    return <Popover ref={ref} body {...props}></Popover>;
  }
);


const emptyCart = (
  <Popover id='empty-cart-popover'>
    <Popover.Body className='popover-wrapper'>
      <div className='popover-icon-parent'>
        <i className='food-shopping-cart-icon empty-icon'></i>
        <h4 className='popover-header'>Your cart is empty</h4>
        <div className='add-items-txt'>Add items from a restaurant or store to start a new cart</div>
      </div>
      <div className='popover-btn-wrapper'>

      </div>
    </Popover.Body>
  </Popover>
)

const CartBtn = (props) => {
  const items = [];

  return (
    <OverlayTrigger
      trigger='click'
      overlay={items && items.length > 0 ? '' : emptyCart} 
      placement='bottom'
    >
      <button className='btn position-relative cart-btn'>
        <i className='food-shopping-cart-icon cart-icon'></i>
        <span className='position-absolute top-0 start-100 translate-middle badge rounded pill bg-primary'>
          0
        </span>
      </button>
    </OverlayTrigger>
  );
};

export default CartBtn;
