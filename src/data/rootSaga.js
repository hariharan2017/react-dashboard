import { fork, all } from "redux-saga/effects";
import { watcher as loginWatcher } from "./login";

export default function* () {
  yield all([fork(loginWatcher)]);
}
