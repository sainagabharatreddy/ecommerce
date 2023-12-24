import React, { useEffect } from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';

import CartPage from './pages/CartPage';
import Checkout from './pages/CheckOut';
import ProductDetailPage from './pages/ProductDetailsPage';
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUserIdAsync } from './features/cart/CartSlice';
import { selectedLoggedInUser } from './features/auth/Authslice';
import Error from './pages/404';
import OrderSucess from './pages/OrderSucess';
import UserOrderPage from './pages/UserOrderPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/UserSlice';
import Logout from './features/auth/components/Logout';
import ForgetPassword from './features/auth/components/ForgetPassword';
import ForgotPasswordPage from './pages/ForgotPasswordPage';






const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <Protected>
      <Home></Home>
    </Protected>
      
      
    
    ),
  },
  {
    path: "/login",
    element: (
      
    <LoginPage>

   
    </LoginPage>
     
   
    ),
  },
  {
    path: "/signup",
    element: (
      
      <SignUpPage>
  
      </SignUpPage>
       
      
      
    ),
  },
  {
    path: "/cart",
    element: (
     
      <CartPage>

      </CartPage>
       
     
      
    ),
  },
  { 
    path: '/checkout',
    element: (
      <Protected>
   <Checkout></Checkout>
   </Protected>
  
      
    ),
  },
  { 
    path: '/productdetails/:id',
    element: (
      <Protected>
    <ProductDetailPage></ProductDetailPage>
    </Protected>
    
    ),
  },
  { 
    path: '/ordersucess/:id',
    element: (
 <OrderSucess></OrderSucess>
    ),
  },
  { 
    path: '/order',
    element: (
     <UserOrderPage></UserOrderPage>
    ),
  },
  { 
    path: '/profile',
    element: (
         <UserProfilePage></UserProfilePage>
    ),
  },
  {
    path: '/logout',
    element: <Logout></Logout>,
  },
  {
    path: '/forgotpassword',
    element: (
      <ForgotPasswordPage></ForgotPasswordPage>
    ),
  },
  
  { 
    path: '*',
    element: (
  <Error></Error>
    ),
  },
]);

function App() {

   const dispatch = useDispatch()
   const user = useSelector(selectedLoggedInUser)
  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id));
      
    }
  }, [dispatch, user])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
