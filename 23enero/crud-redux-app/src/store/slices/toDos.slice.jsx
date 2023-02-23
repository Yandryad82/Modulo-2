import { createSlice } from '@reduxjs/toolkit';

export const toDosSlice = createSlice({

    name: 'toDos',
    initialState: [
        
      ],
    
      reducers: {
      addToDo: (state, action) => {
        const toDo = action.payload;
        state.push(toDo)
      }
    }
})

export const { addToDo } = toDosSlice.actions;

export default toDosSlice.reducer;
