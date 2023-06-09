import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

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
  },
  extraReducers(builder) {
    // addCar would be the same as 'cars/addCar'
    // second parameter is a mini reducer function
    builder.addCase(addCar, (state) => {
      state.name = '';
      state.cost = 0;
    });
  }
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
