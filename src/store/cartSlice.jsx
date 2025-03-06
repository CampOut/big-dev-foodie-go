import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  restaurant: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      if (
        state.restaurant &&
        item.restaurant &&
        state.restaurant !== item.restaurant
      ) {
        state.items = [{ ...item, quantity: 1 }];
        state.restaurant = item.restaurant;
        return;
      }

      if (!state.restaurant && item.restaurant) {
        state.restaurant = item.restaurant;
      }

      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id === itemId);

      if (state.items.length === 0) {
        state.restaurant = null;
      }
    },

    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;

      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== itemId);
        if (state.items.length === 0) {
          state.restaurant = null;
        }
        return;
      }

      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.restaurant = null;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartRestaurant = (state) => state.cart.restaurant;
export const selectTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectSubtotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
