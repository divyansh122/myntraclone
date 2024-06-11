import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './itemSlice';
import fetchStatusSlice from './fetchStatusSlice';
const finalStore =configureStore({
  reducer:{
    items:itemsSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
  }
})
export default finalStore;