import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActiveSize {
  activeSize: "sm" | "md" | "lg" | "xl";
}

const initialState: ActiveSize = {
  activeSize: "sm",
};

export const SizeSlice = createSlice({
  name: "Active",
  initialState,
  reducers: {
    setActiveSize: (state, action: PayloadAction<ActiveSize["activeSize"]>) => {
      state.activeSize = action.payload;
    },
  },
});

export const { setActiveSize } = SizeSlice.actions;

export default SizeSlice.reducer;
