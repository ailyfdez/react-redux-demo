import { call, put, takeLatest } from "redux-saga/effects";
import UserService from "../../services/user";
import { saveUser } from "../action";

function* loadUserName() {
  try {
    const name = yield call( UserService.getUser);
    yield put(saveUser(name));
  } catch (e) {
    console.log(e);
  }
}


function* childSaga() {
  yield takeLatest('[child comp] get user', loadUserName);
}

export default childSaga;