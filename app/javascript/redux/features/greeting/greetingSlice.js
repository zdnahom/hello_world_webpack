import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://127.0.0.1:3000/api/v1/greetings';

export const getGreeting = createAsyncThunk('greeting/getGreeting', async (_, thunkAPI) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  greeting: {},
  isLoading: false,
  error: null,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getGreeting.fulfilled, (state, action) => ({
        ...state,
        greeting: action.payload,
        isLoading: false,
      }))
      .addCase(getGreeting.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default greetingSlice.reducer;
