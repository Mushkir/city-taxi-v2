import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SelectedDriverId from "../type/selectedDriverId";


export interface SelectedDriverIdState {
    driverId: SelectedDriverId | null;
}
const initialState: SelectedDriverIdState = {
    driverId: null
};

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        addReservationDriverId: (state, action: PayloadAction<SelectedDriverId>) => {
            state.driverId = action.payload;
        }
    }
    
})

export const { addReservationDriverId } = reservationSlice.actions

export default reservationSlice.reducer