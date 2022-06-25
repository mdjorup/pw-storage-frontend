import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: null,
    email: null,
    jwt: null
  },
  reducers: {
    clearUser: (state) => {
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  }
})

export const {setUser, clearUser} = userSlice.actions

export default userSlice.reducer