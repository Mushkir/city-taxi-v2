import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
// import storageSession from 'redux-persist/lib/storage/session'
import userReducer from "./user/userSlice"
import reservationReducer from "./reservation/reservationSlice"
import countReservationReducer from "./reservation/countReservationSlice"
import deleteReservationReducer from "./reservation/deleteReservation"


const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    user: userReducer,
    reservation: reservationReducer,
    countReservation: countReservationReducer,
    deleteReservation: deleteReservationReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        }
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch