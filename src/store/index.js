import { configureStore } from '@reduxjs/toolkit';
import product from './reducers/product';
import selectedProduct from './reducers/selectedProduct';

const store = configureStore({
  reducer: {
    product: product,
    selectedProduct: selectedProduct,
  }
});

export default store;