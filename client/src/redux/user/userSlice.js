import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SignInStart: (state) => {
            state.loading = true;
        },

        SignInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },

        SignInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const { SignInStart, SignInSuccess, SignInFailure } = userSlice.actions;

export default userSlice.reducer;