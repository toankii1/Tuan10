import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todos/todoSlice'
import themeReducer from '../features/theme/themeSlice';
import cartSlice from  '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/users/userSlice'
import bmiReducer from '../features/bmi/bmiSlice';
import eventReducer from '../features/event/eventSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartSlice,
    auth: authReducer,
    users: userReducer,
    bmi : bmiReducer,
    events : eventReducer,
  },
});
