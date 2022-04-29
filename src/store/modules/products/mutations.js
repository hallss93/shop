function setListProducts(state, payload) {
  state.listProducts = payload;
  try {
    const favoriteProducts = JSON.parse(localStorage.getItem("favorites"));
    if (!favoriteProducts) {
      throw new Error();
    }
    state.favoriteProducts = favoriteProducts;
  } catch (e) {
    state.favoriteProducts = [];
  }
}

function setProductFavorite(state, payload) {
  const favoriteProducts = Object.assign(state.favoriteProducts, []);
  favoriteProducts.push(payload);
  state.favoriteProducts = favoriteProducts;
  localStorage.setItem("favorites", JSON.stringify(favoriteProducts));
}

function unSetProductFavorite(state, payload) {
  const favoriteProducts = Object.assign(state.favoriteProducts, []);
  const index = favoriteProducts.findIndex((item) => item === payload);
  favoriteProducts.splice(index, 1);
  state.favoriteProducts = favoriteProducts;
}

function addBasket(state, payload) {
  const basket = Object.assign(state.basket, []);
  basket.push(payload);
  state.basket = basket;
}

function removeBasket(state, payload) {
  const basket = Object.assign(state.basket, []);
  const index = basket.findIndex((item) => item.id === payload.id);
  basket.splice(index, 1);
  state.basket = basket;
}

function setLoading(state, payload) {
  state.isLoading = payload;
}

export default {
  setListProducts,
  setProductFavorite,
  unSetProductFavorite,
  addBasket,
  removeBasket,
  setLoading,
};
