import { createSlice } from '@reduxjs/toolkit';
import { apiRegister, apiLogIn, apiLogOut, apiRefresh } from './operations.js';
import { authInitialState } from './constants';
import {resetState} from "../../utils/utils.js";

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: (builder) => {
        builder
            // Reset state
            .addCase(resetState, () => authInitialState)
            // Registration
            .addCase(apiRegister.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            // Log In
            .addCase(apiLogIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            // Log Out
            .addCase(apiLogOut.fulfilled, () => {
                return authInitialState;
            })
            // Refresh
            .addCase(apiRefresh.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(apiRefresh.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(apiRefresh.rejected, state => {
                state.isRefreshing = false;
                state.isLoggedIn = false;

            });
    }
});

export const authReducer = authSlice.reducer;