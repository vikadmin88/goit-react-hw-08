import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './constants.js';

const slice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export const filterReducer = slice.reducer;
