import { createSlice } from '@reduxjs/toolkit';

export const messageSlice = createSlice({
		name: 'message',
    initialState: 0,
    reducers: {
      increment: (state, action) => {
        const inputValue = action.payload;
        return inputValue + state; // setCounter(inputValue)
      },
      decrement: (state) => {
        return state -1
      }
    }
})

export const { increment, decrement } = messageSlice.actions;

export default messageSlice.reducer;