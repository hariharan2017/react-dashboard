import { combineReducers } from "redux";
import { reducers as appReducer } from "./app";
import { reducers as loginReducer } from "./login";

export default combineReducers({
  application: appReducer,
  authentication: loginReducer
});