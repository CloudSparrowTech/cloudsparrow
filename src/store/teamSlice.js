import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
  name: "team",
  initialState: { teamsData: [] },
  reducers: {
    setTeamData: (state, action) => {
      state.teamsData = action.payload.teamsData;
    },
  },
});

export const { setTeamData } = teamSlice.actions;

export default teamSlice.reducer;
