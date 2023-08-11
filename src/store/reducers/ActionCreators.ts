import axios from "axios";
import { IPassword } from "../../models/IPassword";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPasswords = createAsyncThunk(
  'password/fetchAll',
  async (_, thunkAPI) => {
    try {
    	const response = await axios.get<IPassword[]>('https://64ceccce0c01d81da3ef0f46.mockapi.io/passwords')
      return response.data;
    } catch (e) {
    	return thunkAPI.rejectWithValue('Failed to load passwords')
    }
	}
)