import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/serviceSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    service: serviceReducer,
  },
});

// console.log('oncreate store : ', store.getState());

// store.subscribe(() => {
//   console.log('Store Change : ', store.getState());
// });

export default store;
