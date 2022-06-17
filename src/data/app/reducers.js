import { combineReducers } from "redux";
import * as types from "./types";
import { LIGHT_MODE, DARK_MODE } from "../../constants/constants";

const ApplicationReducer = (state, action) => {
  state = state || { theme: LIGHT_MODE };
  switch (action.type) {
    case types.CHANGE_TO_DARK_MODE:
      return {
        ...state,
        theme: DARK_MODE,
      };
    case types.CHANGE_TO_LIGHT_MODE:
      return {
        ...state,
        theme: LIGHT_MODE,
      };
    case types.TOGGLE_THEME:
      if (state.theme === LIGHT_MODE) {
        return {
          ...state,
          theme: DARK_MODE,
        };
      } else {
        return {
          ...state,
          theme: LIGHT_MODE,
        };
      }
    default:
      return state;
  }
};

export default combineReducers({
  app: ApplicationReducer
});