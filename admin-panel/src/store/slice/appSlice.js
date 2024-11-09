/**
 * @name Hotel Room Booking System
 * @author Dickens Juma
 * @description Hotel Room Booking and Management System Software ~ Developed By Dickens Juma
 * @copyright ©2023 ― Dickens Juma . All rights reserved.
 * @version v0.0.1
 *
 */

import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    timeZone: '',
    isLoading: false,
    reFetch: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    reFetchData: (state) => {
      state.reFetch = !state.reFetch;
    }
  }
});

export const { setLoading, reFetchData } = appSlice.actions;

export default appSlice.reducer;
