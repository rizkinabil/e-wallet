import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/serviceSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    user: authReducer,
    service: serviceReducer,
  },
});

// console.log('oncreate store : ', store.getState());

// store.subscribe(() => {
//   console.log('Store Change : ', store.getState());
// });

export default store;
