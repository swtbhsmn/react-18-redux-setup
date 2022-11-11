import { createSlice } from '@reduxjs/toolkit'
import {fetchFakeData} from './ActionCreator'
const fakeDataSlice = createSlice({
  name: 'fakeData',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {
    fakeDataAdded: {
        reducer(state, action) {
          state.data.push(action.payload)
        }
      }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFakeData.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchFakeData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.data = state.data.concat(action.payload)
      })
      .addCase(fetchFakeData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { fakeDataAdded } = fakeDataSlice.actions
export default fakeDataSlice.reducer