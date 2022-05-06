import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isAuth: null
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});

const {reducer: authReducer, actions} = authSlice;
const authActions = {}

export {
    authReducer,
    authActions
}