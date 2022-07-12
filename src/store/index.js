import { configureStore } from '@reduxjs/toolkit'
import loading from './loading'
import nav from './nav';
export const store = configureStore({
  reducer: 
  {
    loading: loading,
    nav: nav
  },
})