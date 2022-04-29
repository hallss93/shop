export default {
  listProducts: (state) => state.listProducts,
  favoriteProducts: (state) => state.favoriteProducts,
  basket: (state) => state.basket,
  basketSum: (state) => state.basket.reduce((a, b) => a + b.price, 0).toFixed(2),
  isLoading: (state) => state.isLoading,
};
