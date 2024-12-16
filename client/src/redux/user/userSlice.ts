import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; 

export interface UserState {
    user: object
}

const initialState: UserState = {
    user: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, actions) => {
            state.user = actions.payload
        }
    }
})

export const { userLogin } = userSlice.actions

export default userSlice.reducer