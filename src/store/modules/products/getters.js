export default {
  listProducts: (state) => state.listProducts,
  favoriteProducts: (state) => state.favoriteProducts,
  cart: (state) => state.cart,
  cartSum: (state) => state.cart.reduce((a, b) => a + b.price, 0).toFixed(2),
};
