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
      state.error = null;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
      state.error = null;
    },
    setResults(state, action) {
      state.results = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
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
