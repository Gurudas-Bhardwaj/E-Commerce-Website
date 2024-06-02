import { configureStore } from '@reduxjs/toolkit';
import cartNumberReducer from '../Features/CartNumber';
import AddToCartReducer from '../Features/AddToCart'

const store = configureStore({
  reducer: {
    CartNumber: cartNumberReducer, 
    AddtoCart:AddToCartReducer,
  },
});

export default store;
