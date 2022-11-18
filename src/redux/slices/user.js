import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const initialState = {
    isLoading: false,
    error: null,
    user: {},
};

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Start Loading
        startLoading(state) {
            state.isLoading = true;
        },
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        getUserSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.user = action.payload;
        },
    },
});

export default slice.reducer;

export function getUser(userId) {
    return null;
}

export function setUser({ user }) {
    dispatch(slice.actions.startLoading());
    try {
        dispatch(slice.actions.getUserSuccess(user));
    } catch (error) {
        dispatch(slice.actions.hasError(error));
    }
}
