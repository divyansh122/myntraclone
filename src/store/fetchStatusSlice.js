import { createSlice } from '@reduxjs/toolkit';

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    fetching: false,
  },
  reducers: {
    setFetchDone: (state) => {
      state.fetchDone = true;
    },
    fetchingStarted: (state) => {
      state.fetching = true;
    },
    fetchingEnded: (state) => {
      state.fetching = false;
    }
  }
});  

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
