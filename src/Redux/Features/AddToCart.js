import { createSlice } from "@reduxjs/toolkit";

export const AddToCart = createSlice({
  name: 'AddToCart',
  initialState: {
    myArray: []
  },
  reducers: {
    add(state, hello) {
        state.myArray.push(hello.payload);
    },
    remove(state, action) {
      return state.myArray.filter((item) => item.id != action.payload);
  },
  },
});

export const { add, remove } = AddToCart.actions;
export default AddToCart.reducer;
