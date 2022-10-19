import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const message = createSlice({
  name: 'sendMsg',
  initialState: 
  {
    ,
  },
  reducers: {
    panic: (state) =>
    {
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { sending } = message.actions

export default message.reducer