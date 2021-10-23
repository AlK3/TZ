import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateUser(state, action) {
      state.user = action.payload;
    },
  }
});

export const { updateUser } = userSlice.actions;
export const userReducer = userSlice.reducer;