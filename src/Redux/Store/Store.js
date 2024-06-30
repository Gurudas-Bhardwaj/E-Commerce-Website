import { configureStore } from '@reduxjs/toolkit';
import cartNumberReducer from '../Features/CartNumber';
import AddToCartReducer from '../Features/AddToCart'
import CartToggleReducer from '../Features/CartToggle'

const store = configureStore({
  reducer: {
    CartNumber: cartNumberReducer, 
    AddtoCart:AddToCartReducer,
    CartToggle:CartToggleReducer,
  },
});

export default store;
