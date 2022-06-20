import * as action from "./types";

export const login = (payload) => ({
  type: action.AUTHENTICATION_LOGIN,
  payload,
});

export const loginSuccess = () => ({
  type: action.AUTHENTICATION_LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: action.AUTHENTICATION_LOGIN_FAILURE,
});

export const logout = () => ({
  type: action.AUTHENTICATION_LOGOUT,
});
