import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  id: 0,
  title: 'test',
  category: 'teste2',
}];

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, {payload}) => {
      return state = payload;
    },
    selectedProduct: (state, {payload}) => {
      return state = payload;
    },
    removeSelectedProduct: (state, {payload}) => {

    },
  }
});

export default productSlice.reducer;
export const {
    setProducts,
    selectedProduct,
    removeSelectedProduct
  } = productSlice.actions;