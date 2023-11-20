import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarActive: true,
  screenSize: null,
  isUserProfileOpen: false,
};
const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSidebarActive = !state.isSidebarActive;
    },
    closeSideBar: (state) => {
      state.isSidebarActive = false;
    },
    openSideBar: (state) => {
      state.isSidebarActive = true;
    },
    setScreenSize: (state, { payload }) => {
      state.screenSize = payload;
    },
    toggleUserProfile: (state) => {
      state.isUserProfileOpen = !state.isUserProfileOpen;
    },
  },
});
export const {
  toggleSideBar,
  openSideBar,
  closeSideBar,
  setScreenSize,
  toggleUserProfile,
} = settingSlice.actions;
export default settingSlice.reducer;
