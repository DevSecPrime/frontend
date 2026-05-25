import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  activeTab: "photos",
  results: [],
  loading: false,
  error: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
      state.loading = false; // if we have got the results off the loading
    },
    setLoading(state) {
      state.loading = true;
      state.error = null; // when there is loading there should not be any error
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false; // set loading false when there is an error
    },
    clearResults(state) {
      state.results = [];
    },
  },
});

export const {
  setQuery,
  setActiveTab,
  setResults,
  setLoading,
  setError,
  clearResults,
} = searchSlice.actions;

export default searchSlice.reducer;
