import {createSlice} from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
  isAdmin: false,
};

const authSlice = createSlice ({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    userLogin (state) {
      state.isAuthenticated = true;
    },
    adminLogin (state) {
      state.isAuthenticated = true;
      state.isAdmin = true;
    },
    logout (state) {
      state.isAuthenticated = false;
      state.isAdmin = false;
      localStorage.clear ();
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
