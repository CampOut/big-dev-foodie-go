import { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'motion/react';
import Button from '../Button';
import { useClickOutside } from '../../hooks/useClickOutside';

import { useSelector } from 'react-redux';
import { selectCartItems, selectTotalItems } from '../../store/cartSlice';

const EmptyCart = ({ setIsOpen }) => {
  return (
    <div className='empty-cart'>
      <i className='food-shopping-cart-icon'></i>
      <h3 className='empty-cart-title'>Your cart is empty</h3>
      <p className='empty-cart-text'>
        Add items from a restaurant or store to start a new cart
      </p>
      <Button onClick={() => setIsOpen(false)} style={{ width: '100%' }}>
        Start shopping
      </Button>
    </div>
  );
};

const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const dropdownRef = useRef(null);

  const toggleCart = () => setIsOpen(!isOpen);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className='cart-container' ref={dropdownRef}>
      <button
        onClick={toggleCart}
        className='cart-button'
        aria-label='shopping cart'
      >
        <i className='food-shopping-cart-icon'></i>
        {totalItems > 0 && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className='badge'
          >
            {totalItems}
          </motion.div>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='dropdown'
          >
            {items.length === 0 ? (
              <EmptyCart setIsOpen={setIsOpen} />
            ) : (
              <p>filled</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartButton;
