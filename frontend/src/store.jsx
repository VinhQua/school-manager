"use client";
import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "./features/settings/settingSlice";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: {
    setting: settingSlice,
  },
});

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
