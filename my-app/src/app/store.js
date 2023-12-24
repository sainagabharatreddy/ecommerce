import { configureStore } from '@reduxjs/toolkit';

import productReducer from '../features/productList/ProductSlice'
import authReducer from '../features/auth/Authslice'
import cartReducer from '../features/cart/CartSlice'
import orderReducer from '../features/order/orderSlice'
import userReducer from '../features/user/UserSlice'
export const store = configureStore({
  reducer: {
   
    product: productReducer,
    auth:authReducer,
    cart:cartReducer,
    order:orderReducer,
    user:userReducer
    
    
  },
});
