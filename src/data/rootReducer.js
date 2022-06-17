import { combineReducers } from "redux";
import { reducers as appReducer } from "./app";

export default combineReducers({
  application: appReducer
});