import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface indicatorInterface {
  titleIndicator: string
  urlImageIndicator: string
}
export interface CounterState {
  value: number
  indicator: indicatorInterface
}

const initialState: CounterState = {
  value: 10,
  indicator: {
    titleIndicator: 'title',
    urlImageIndicator: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg',
  },
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    changeIndicator: (state, action: PayloadAction<indicatorInterface>) => {
      state.indicator.titleIndicator = action.payload.titleIndicator
      state.indicator.urlImageIndicator = action.payload.urlImageIndicator
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  changeIndicator,
} = counterSlice.actions

/* export default counterSlice.reducer */
