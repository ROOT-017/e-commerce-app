import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  // data: {};
  uid: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  // data: {},
  uid: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      // state.data = action.payload.data;
      state.uid = action.payload.uid;
    },
    signout(state) {
      state.isLoggedIn = false;
      state.token = null;
      // state.data = {};
      state.uid = null;
    },
  },
});

export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
