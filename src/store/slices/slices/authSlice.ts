import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface indicatorInterface {
  user: any
}
export interface AuthState {
  value: number
  user: any
  isLogged: boolean
}

const initialState: AuthState = {
  value: 10,
  user: null,
  isLogged: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startSession: (state, action: PayloadAction<any>) => {
      console.log(action.payload)
      state.isLogged = true
      state.user = action.payload
    },
  },
})
export const { startSession } = authSlice.actions


