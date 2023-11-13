import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: true,
};
const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSideBar } = settingSlice.actions;
export default settingSlice.reducer;
