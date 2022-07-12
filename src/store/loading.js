import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const loading = createSlice({
  name: 'loading',
  initialState,
  reducers: {
 
    loadOff: (state) => {
      state.value = false
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { loadOff } = loading.actions

export default loading.reducer