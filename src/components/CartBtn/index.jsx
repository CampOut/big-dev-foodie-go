import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';

const CartBtn = (props) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <button className='cart-btn' ref={target} onClick={() => setShow(!show)}>
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
      <Overlay target={target.current} show={show} placement='center'>
        
      </Overlay>
    </>
  );
};

export default CartBtn;
