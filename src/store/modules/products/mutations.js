function setListProducts(state, payload) {
  state.listProducts = payload;
}

function setProductFavorite(state, payload) {
  const favoriteProducts = Object.assign(state.favoriteProducts, []);
  favoriteProducts.push(payload);
  state.favoriteProducts = favoriteProducts;
}

function unSetProductFavorite(state, payload) {
  const favoriteProducts = Object.assign(state.favoriteProducts, []);
  const index = favoriteProducts.findIndex((item) => item === payload);
  favoriteProducts.splice(index, 1);
  state.favoriteProducts = favoriteProducts;
}

function addCart(state, payload) {
  const cart = Object.assign(state.cart, []);
  cart.push(payload);
  state.cart = cart;
}

function removeCart(state, payload) {
  const cart = Object.assign(state.cart, []);
  const index = cart.findIndex((item) => item.id === payload.id);
  cart.splice(index, 1);
  state.cart = cart;
}

export default {
  setListProducts,
  setProductFavorite,
  unSetProductFavorite,
  addCart,
  removeCart,
};
