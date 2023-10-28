import { createSlice } from "@reduxjs/toolkit";

export const workSlice = createSlice({
  name: "work",
  initialState: {
    data: [],
  },
  reducers: {
    updateWork: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    resetWork: (state)=>{
      state.data = []
    }
  },
});

export const { updateWork,resetWork } = workSlice.actions;
export default workSlice.reducer;
