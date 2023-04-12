import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProductById,
  fetchProducts,
  addProduct,
  deleteProduct,
} from "./productsOperations";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    product: {},
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.error = null;
        state.product = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.error = null;
        const index = state.items.findIndex(
          (product) => product.id === action.payload.id
        );
        state.items.splice(index, 1);
      });
  },
});

export const productsReducer = productsSlice.reducer;
