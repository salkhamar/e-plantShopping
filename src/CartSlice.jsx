import { createSlice } from '@reduxjs/toolkit';

/*
  CartSlice.jsx
  Purpose:
  - Stores all shopping cart items globally using Redux Toolkit.
  - Supports adding plants, removing plants, and updating quantities.
*/

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adds a plant to the cart.
    // If the plant already exists, increase quantity by 1.
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find((item) => item.name === plant.name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
    },

    // Removes one plant type completely from the cart by plant name.
    removeItem: (state, action) => {
      const plantName = action.payload;
      state.items = state.items.filter((item) => item.name !== plantName);
    },

    // Updates the quantity for a specific plant.
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;