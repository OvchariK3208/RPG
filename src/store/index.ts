import { combineReducers, configureStore } from "@reduxjs/toolkit";
import passwordReducer from './reducers/PasswordSlice';
import { passwordAPI } from "../services/PasswordService";

const rootReducer = combineReducers({
    passwordReducer,
    [passwordAPI.reducerPath]: passwordAPI.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(passwordAPI.middleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch