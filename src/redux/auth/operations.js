import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
});
const setToken = token => instance.defaults.headers.common.Authorization = `Bearer ${token}`;
const clearToken = () =>  instance.defaults.headers.common.Authorization = '';

export const apiRegister = createAsyncThunk(
    'auth/register',
    async (formData, thunkAPI) => {
        try {
            const resp = await instance.post('/users/signup', formData);
            setToken(resp.data.token);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const apiLogIn = createAsyncThunk('auth/login',
    async (formData, thunkAPI) => {
        try {
            const resp = await instance.post('/users/login', formData);
            setToken(resp.data.token);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const apiLogOut = createAsyncThunk('auth/logout',
    async (_, thunkAPI) => {
    try {
        await instance.post('/users/logout');
        clearToken();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const apiRefresh = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        setToken(token);
        try {
            const resp = await instance.get('/users/current');
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
    {
        condition: (_, thunkAPI) => {
            const state = thunkAPI.getState();
            const token = state.auth.token;
            if (!token) return false;
        }
    }
);
