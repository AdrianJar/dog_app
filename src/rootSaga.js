import { all } from "redux-saga/effects";
import { dogsListSaga } from "./feature/dogsList/dogsListSaga";

export default function* rootSaga() {
    yield all([
        dogsListSaga(),
    ])
}