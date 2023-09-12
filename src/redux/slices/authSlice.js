import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('user/loginUser', async (UserCredentials) => {
  const request = await axios.post(`${import.meta.env.VITE_URL_API}/login`, UserCredentials);
  const response = await request.data.data;
  localStorage.setItem('user', JSON.stringify(response));
  return response;
});

const authSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === 'Request failed with status code 400') {
          state.error = 'Parameter email tidak sesuai format';
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default authSlice.reducer;
