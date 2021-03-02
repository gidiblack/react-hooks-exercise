import React, { useEffect, useState, useReducer } from 'react';
import axios from "axios";

const dataFetchReducer = (state, action) => {
    switch (action.type){
        case "FETCH_INIT":
            return {
                ...state, 
                isLoading: true, 
                isError: false
            };
        
        case "FECTH_SUCCESS":
            return {
                ...state,
                isLoading: false,
                hasErrored : false,
                errorMessage: "",
                data: action.payload
            };

        case "FETCH_FAILURE":
            return {
                ...state,
                isLoading: false,
                hasErrored: true,
                errorMessage: "Data Retrieve Failure"
            };

        case "REPLACE_DATA":
            // The record parsed (state.data) must had attribute "id"
            const newData = state.data.map(rec => {
                return rec.id === action.replacerecord.id ? action.replacerecord : rec;
            });
            return {
                ...state,
                isLoading: false,
                hasErrored: false,
                errorMessage: "",
                data: newData
            };
        default:
            throw new Error();
    }
};

// REST data fetch call that takes a URL to call then ansynchronously return data
// this hook needs to survive state changes so initial url and data need to be parsed as parameters to return data immediately that will be used before the REST data is fetched
const useAxiosFetch = (initialUrl, initialData) => {
    const [url] = useState(initialUrl);
    // useReducer call that returns the state values for initial load
    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        hasErrored: false,
        errorMessage: '',
        data: initialData
    });
    // useEffect hook that executes when the component first is called with an async function to satisfy useEffect rules
    useEffect(() => {
        let didCancel = false;
        // async function
        const fetchData = async () => {
            // dispatch to reducer
            dispatch({ type: "FETCH_INIT"});
            // try to fetch data with axios
            try {
                let result = await axios.get(url);
                // if success dispatch success
                if (!didCancel){
                    dispatch({type: "FETCH_SUCCESS", payload: result.data });
                }
            } catch (err) {
                // if error dispatch failure
                if (!didCancel){
                    dispatch({ type: "FETCH_FAILURE"});
                }
            }
        };
        // invoke async function
        fetchData();

        return () => {
            didCancel = true;
        };
    }, [url]);
    // function to update one data record
    const updateRecord = record => {
        dispatch({
            type: "REPLACE_DATA",
            replacerecord: record
        });
    };
    // return all the attributes of state and updateRecord function
    return { ...state, updateRecord};
};

export default useAxiosFetch;   