import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DeleteReservation from "../type/deleteReservation";


export interface DeleteReservationState {
    reservationId: DeleteReservation | null
}

const initialState: DeleteReservationState = {
    reservationId:  null
}


const deleteReservationSlice = createSlice({
    name: 'deleteReservation',
    initialState,
    reducers: {
        setReservationId: (state, action: PayloadAction<DeleteReservation>) => {
            state.reservationId = action.payload

        }
    }
})

export const { setReservationId } = deleteReservationSlice.actions
export default deleteReservationSlice.reducer