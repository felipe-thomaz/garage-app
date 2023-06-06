import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0
  },
  reducers: {
    changeName(state, action) {
      // state.name is a reference to the "name" from the initialState section.
      // it will receive the value from action.payload (updating the state)
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    }
  }
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
