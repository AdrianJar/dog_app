import { createSlice } from "@reduxjs/toolkit";

const dogsListSlice = createSlice({
    name: "dogsList",
    initialState: {
        status: "loading",
        list: null,
    },
    reducers: {
        fetchDogsList: () => {
        },
        fetchDogsListSuccess: (state, { payload: list }) => {
            state.status = "success";
            state.list = list;
        },
        fetchDogsListError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchDogsList,
    fetchDogsListError,
    fetchDogsListSuccess,
} = dogsListSlice.actions

const selectDogsListState = (state) => state.dogsList;

export const selectListStatus = (state) => selectDogsListState(state).status;
export const selectList = (state) => selectDogsListState(state).list;

export default dogsListSlice.reducer;