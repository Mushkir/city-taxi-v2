import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; 
import CurrentUser from "../type/currentUser";

export interface UserState {
    user: CurrentUser| null;
}

const initialState: UserState = {
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, actions: PayloadAction<CurrentUser>) => {
            state.user = actions.payload
        },

        userLogout: (state) => {
            state.user = null
        }
    }
})

export const { userLogin, userLogout } = userSlice.actions

export default userSlice.reducer