import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./sagas/index.js";
import rootReducer from "./reducers";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
});

// then run the sagas
sagaMiddleware.run(rootSaga)


export type AppDispatch = typeof store.dispatch;
export default store;