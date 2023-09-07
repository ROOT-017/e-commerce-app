import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  // data: {};
  uid: string | null;
  email: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  // data: {},
  email: "",
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
      state.email = action.payload.email;
    },
    signout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.uid = null;
      state.email = "";
    },
  },
});

export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
