import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./productsOperations";

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
      });
  },
});

export const productsReducer = productsSlice.reducer;
