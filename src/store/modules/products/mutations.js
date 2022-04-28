function setListProducts(state, payload) {
  state.listProducts = payload;
}

function setProductFavorite(state, payload) {
  const favoriteProducts = Object.assign(state.favoriteProducts,[]);
  favoriteProducts.push(payload);
  state.favoriteProducts = favoriteProducts;
}

function unSetProductFavorite(state, payload) {
  const favoriteProducts = Object.assign(state.favoriteProducts,[]);
  for (var i = 0; i < favoriteProducts.length; i++) {
    if (favoriteProducts[i] === payload) {
      favoriteProducts.splice(i, 1);
    }
  }
  state.favoriteProducts = favoriteProducts;
}

export default {
  setListProducts,
  setProductFavorite,
  unSetProductFavorite,
};
