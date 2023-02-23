import { createSlice } from '@reduxjs/toolkit';

export const usernameSlice = createSlice({
		name: 'username',
    initialState: 'Yandry Almaguer',
    reducers: {
       newUser: () => {
        return 'Abby'
       } 
    }
})

export const { newUser } = usernameSlice.actions;

export default usernameSlice.reducer;