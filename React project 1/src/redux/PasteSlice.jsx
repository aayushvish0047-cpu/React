import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isHydrated: false,
};

const pasteSlice = createSlice({
  name: "pastes",
  initialState,
  reducers: {
    loadPastes: (state, action) => {
      state.items = action.payload;
      state.isHydrated = true;
    },
    addPaste: (state, action) => {
      state.items.push(action.payload);
    },
    updatePaste: (state, action) => {
      const paste = state.items.find((item) => item.id === action.payload.id);

      if (paste) {
        paste.title = action.payload.title;
        paste.content = action.payload.content;
        paste.updatedAt = action.payload.updatedAt;
      }
    },
    deletePaste: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addPaste, deletePaste, loadPastes, updatePaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
