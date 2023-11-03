import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const {
    actions: profileActions,
    reducer: profileReducer,
} = profileSlice;
