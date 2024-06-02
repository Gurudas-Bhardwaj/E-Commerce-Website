import { createSlice } from '@reduxjs/toolkit';

export const CartNumberSlice = createSlice({
  name: 'CartNumber',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = CartNumberSlice.actions;
export default CartNumberSlice.reducer; // Ensure the reducer is the default export
