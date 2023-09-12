import { createSlice } from '@reduxjs/toolkit';

const serviceSlice = createSlice({
  name: 'topup',
  initialState: {
    data: [
      {
        service_code: '',
        service_name: '',
        service_icon: '',
        service_tarif: 0,
      },
    ],
  },
  reducers: {
    addToBalance: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addToBalance } = serviceSlice.actions;
export default serviceSlice.reducer;
