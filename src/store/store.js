import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
