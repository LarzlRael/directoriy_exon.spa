import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface indicatorInterface {
  user: any
}
export interface AuthState {
  value: number
  user: any
}

const initialState: AuthState = {
  value: 10,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startSession: (state, action: PayloadAction<any>) => {
      console.log(state)
      console.log(action.payload);
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { startSession } = authSlice.actions

/* export default counterSlice.reducer */
