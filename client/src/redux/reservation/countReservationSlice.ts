import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CountReservations from "../type/countReservations";

interface CountReservationState {
    count: CountReservations | number;
}

const initialState: CountReservationState = {
    count: 0,
}

const countReservationSlice = createSlice({
    name: 'countReservation',
    initialState,
    reducers: {
        setCountReservation: (state, action: PayloadAction<CountReservations>) => {
            state.count = action.payload
        }
    }
})

export const { setCountReservation } = countReservationSlice.actions

export default countReservationSlice.reducer