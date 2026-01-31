import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActivePlan {
  ActivePlan: "yearly" | "monthly";
}

const initialState: ActivePlan = {
  ActivePlan: "yearly",
};

export const PlanSlice = createSlice({
  name: "Active",
  initialState,
  reducers: {
    setActivePlan: (state, action: PayloadAction<ActivePlan["ActivePlan"]>) => {
      state.ActivePlan = action.payload;
    },
  },
});

export const { setActivePlan } = PlanSlice.actions;

export default PlanSlice.reducer;
