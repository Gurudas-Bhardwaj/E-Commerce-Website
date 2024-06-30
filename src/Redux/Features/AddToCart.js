import { createSlice } from "@reduxjs/toolkit";

export const AddToCart = createSlice({
  name: 'AddToCart',
  initialState: {
    myArray: []
  },
  reducers: {
    add(state, action) {
        state.myArray.push(action.payload);
    },
    remove(state, action) {
        
    }
  },
});

export const { add, remove } = AddToCart.actions;
export default AddToCart.reducer;
