import { configureStore } from '@reduxjs/toolkit'
import fakeDataReducer from './fakeData';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export const configStore = configureStore({
  reducer: {
    fakeData:fakeDataReducer
  },
  middleware:[thunk,logger]
})