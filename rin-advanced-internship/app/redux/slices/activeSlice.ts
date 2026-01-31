import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActiveState {
  activeTab:
    | "for-you"
    | "library"
    | "highlights"
    | "search"
    | "settings"
    | "help"
    | "logout";
}
const initialState: ActiveState = {
  activeTab: "for-you",
};

export const ActiveSlice = createSlice({
  name: "Active",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<ActiveState["activeTab"]>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = ActiveSlice.actions;

export default ActiveSlice.reducer;
