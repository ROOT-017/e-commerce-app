import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  data: {};
  uid: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  data: {},
  uid: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.data = action.payload.data;
      state.uid = action.payload.uid;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.data = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
