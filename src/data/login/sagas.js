import { put, takeLatest } from "redux-saga/effects";
import * as action from "./actions";
import { LOGIN_URL } from "../../constants/apis";
import { AUTHENTICATION_LOGIN } from "./types";
import axios from "axios";
import { history } from "../../utils/history"; 

export function* login({ payload }) {
  try {
    const result = yield axios.post(LOGIN_URL, payload);
    //createUserSession
    yield put(action.loginSuccess());
    history.push("/home");
  }
  catch (error) {
    yield put(action.loginFailure());
  }
}

export default function* sagas() {
  yield takeLatest(AUTHENTICATION_LOGIN, login);
}