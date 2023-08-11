import { IPassword } from "../../models/IPassword";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPasswords } from "./ActionCreators";

interface PasswordState {
  passwords: IPassword[];
  isLoading: boolean;
  error: null | string | any;
}

const initialState: PasswordState = {
  passwords: [],
  isLoading: false,
  error: null,
}

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {},
  extraReducers: {
  	[fetchPasswords.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPasswords.fulfilled.type]: (state, action: PayloadAction<IPassword[]>) => {
      state.isLoading = false;
      state.passwords = action.payload;
    },
    [fetchPasswords.rejected.type]: (state,  action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
    },
	}
})

export default passwordSlice.reducer;