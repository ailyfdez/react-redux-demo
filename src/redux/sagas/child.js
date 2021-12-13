import { call, put, takeLatest } from "redux-saga/effects";
import BankAccountService from "../../services/bankAccount";
import { getAmount, setAmount } from "../action";

function* loadAmount() {
  try {
    const value = yield call(BankAccountService.getAmount);
    yield put(setAmount(value));
  } catch (e) {
    console.log(e);
  }
}

function* childSaga() {
  yield takeLatest(getAmount, loadAmount);
}

export default childSaga;