import { configureStore } from "@reduxjs/toolkit";
import dogsListReducer from "./feature/dogsList/dogsListSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        dogsList: dogsListReducer
    },

    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga)

export default store;