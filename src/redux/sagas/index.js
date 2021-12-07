import { all } from '@redux-saga/core/effects';

import childSaga from './child';

export default function* rootSaga() {
  yield all([
    childSaga(),
  ]);
}