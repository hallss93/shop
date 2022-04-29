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

  try {
    const basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      throw new Error();
    }
    state.basket = basket;
  } catch (e) {
    state.basket = [];
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
  localStorage.setItem("favorites", JSON.stringify(favoriteProducts));
}

function addBasket(state, payload) {
  const basket = Object.assign(state.basket, []);
  basket.push(payload);
  state.basket = basket;
  localStorage.setItem("basket", JSON.stringify(basket));
}

function removeBasket(state, payload) {
  const basket = Object.assign(state.basket, []);
  const index = basket.findIndex((item) => item.id === payload.id);
  basket.splice(index, 1);
  state.basket = basket;
  localStorage.setItem("basket", JSON.stringify(basket));
}

function clearBasket(state) {
  state.basket = [];
  localStorage.setItem("basket", JSON.stringify([]));
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
  clearBasket,
};
