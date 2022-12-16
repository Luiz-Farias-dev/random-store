import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const selectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers: {
    selectedProduct: (state, {payload}) => {
      return state = payload;
    },
    removeSelectedProduct: (state) => {
      return state = initialState
    },
  }
});

export default selectedProductSlice.reducer;
export const {
    selectedProduct,
    removeSelectedProduct
  } = selectedProductSlice.actions;