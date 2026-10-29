import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./redux/PasteSlice";

export const createAppStore = () =>
  configureStore({
    reducer: {
      paste: pasteReducer,
    },
  });