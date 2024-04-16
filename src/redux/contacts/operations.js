import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
});
const setToken = token => instance.defaults.headers.common.Authorization = `Bearer ${token}`;

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        setToken(token);
        try {
            const { data } = await instance.get('/contacts');
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk("contacts/addContact",
    async (newContact, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        setToken(token);
        try {
            const { data } = await instance.post("/contacts", newContact);
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        setToken(token);
        try {
            const { data } = await instance.delete(`/contacts/${contactId}`);
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);
