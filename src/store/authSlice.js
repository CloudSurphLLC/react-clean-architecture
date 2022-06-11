import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    authSuccess: (state, { payload }) => {
      const { token, user } = payload;
      state.token = token;
      state.user = user;
      state.loading = false;
      state.error = null;
    },
    authFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    authClear: (state) => {
      state.token = null;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

const { reducer, actions } = authSlice;
export const authSelector = (state) => state.auth;

const { authStart, authSuccess, authFailure, authClear } = actions;

export function login(params) {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("LOGIN_API", params)
      .then(({ data }) => {
        dispatch(authSuccess(data));
      })
      .catch((error) => {
        dispatch(authFailure("An error occurred, can't login"));
      });
  };
}

export function logout() {
  return (dispatch) => {
    dispatch(authClear());
  };
}

export default reducer;
