import * as actionType from "./types";

export default (state, action) => {
  state = state || { loading: false, error: null, loggedIn: false };
  switch (action.type) {
    case actionType.AUTHENTICATION_LOGIN:
      console.log(action);
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionType.AUTHENTICATION_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        loggedIn: true
      };
    case actionType.AUTHENTICATION_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionType.AUTHENTICATION_LOGOUT:
      return {
        ...state,
        loading: false,
        loggedIn: false
      }
    default:
      return state;
  }
};
