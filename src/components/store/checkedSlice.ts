import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";

interface CheckedState {
  checkedTech: Array<string>;
}

const initialState: CheckedState = {
  checkedTech: [],
};

const checkedSlice = createSlice({
  name: "checked",
  initialState,
  reducers: {
    addChecked(state, action: PayloadAction<string>) {
      state.checkedTech = [...state.checkedTech, action.payload];
    },
    removeUnchecked(state, action: PayloadAction<string>) {
      state.checkedTech = state.checkedTech.filter(
        (el) => el !== action.payload
      );
    },
    removeAll(state) {
      state.checkedTech = [];
    },
  },
});

export const { addChecked, removeUnchecked, removeAll } = checkedSlice.actions;

export default checkedSlice;
