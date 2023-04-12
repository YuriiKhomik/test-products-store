export const selectProducts = (state) => state.products.items;
export const selectError = (state) => state.products.error;
export const selectProduct = (state) => state.products.product;
// export const selectProductById = (state, id) => {
//   const products = selectProducts(state);

//   return products.find((obj) => obj.id === id);
// };
