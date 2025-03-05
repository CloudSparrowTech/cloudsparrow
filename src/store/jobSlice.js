import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: { jobsData: [] },
  reducers: {
    setAllJobs: (state, action) => {
      state.jobsData = action.payload.jobsData;
    },
  },
});

export const { setAllJobs } = jobSlice.actions;

export default jobSlice.reducer;
