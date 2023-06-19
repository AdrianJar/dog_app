import { call, delay, put, takeLatest } from "redux-saga/effects"
import { getDogsList } from "./dogsListAPI";
import { fetchDogsList, fetchDogsListError, fetchDogsListSuccess } from "./dogsListSlice";


const loadingDelay = 1000;

function* fetchDogsListHandler() {
    try {
        yield delay(loadingDelay);
        const list = yield call(getDogsList);
        yield put(fetchDogsListSuccess(list))
    } catch (error) {
        yield put(fetchDogsListError());
    }
};

export function* dogsListSaga() {
    yield takeLatest(fetchDogsList.type, fetchDogsListHandler)
};