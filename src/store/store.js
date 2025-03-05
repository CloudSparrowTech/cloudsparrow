import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";
import teamSlice from "./teamSlice";

const store = configureStore({
  reducer: {
    authSlice,
    jobSlice,
    teamSlice,
  },
});

export default store;
