import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: '',
  password: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    updateLogin(state, action) {
      state.login = action.payload;
    },
    updatePassword(state, action) {
      state.password = action.payload;
    },
  }
});

export const { updateLogin, updatePassword } = formSlice.actions;
export const formReducer = formSlice.reducer;