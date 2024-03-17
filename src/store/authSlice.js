import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state, action) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;

/* The `export` keyword in JavaScript is used to export functions, objects, or values from a module so that they can be imported and used in other modules. 
In the provided code snippet, the `export` keyword is used to export the `authSlice.reducer` and `authSlice.actions` from the module. 
This allows other modules to import and use these exported values. */

/* `createSlice` is a function provided by Redux Toolkit that simplifies the process of creating Redux slices. 
A Redux slice is a collection of Redux-related logic for a specific feature in your application, including the initial state, reducers, and actions. */
