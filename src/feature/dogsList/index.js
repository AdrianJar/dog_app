import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDogsList, selectListStatus } from './dogsListSlice';
import List from './list';

const DogsList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDogsList());
    }, [dispatch]);

    const listStatus = useSelector(selectListStatus);

    switch (listStatus) {
        case "loading":
            return <>LOADING</>;

        case "error":
            return <>ERROR</>;

        case "success":
            return <List />;

        default:
            throw new Error(`incorrect status: ${listStatus}`);
    }
}

export default DogsList;