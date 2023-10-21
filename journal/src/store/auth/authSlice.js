import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'logout',
        uuid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, action) => {

        },
        logout: (state, action) => {

        },
        checkCredentials: (state, action) => {
            console.log(state)
            console.log(action)
            state.status = 'checking'
        }
    }
})

export const {login, logout, checkCredentials} = authSlice.actions
