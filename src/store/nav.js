import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'home',
}

export const nav = createSlice({
  name: 'nav',
  initialState,
  reducers: {
 
    activeNav: (state, action) => {
      state.value = action.payload
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { activeNav } = nav.actions

export default nav.reducer