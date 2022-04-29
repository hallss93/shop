async function listAllProducts({ commit }) {
  try {
    commit("setLoading", true);
    const { data } = await this.axios.get(`https://fakestoreapi.com/products`);
    commit("setListProducts", data);
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  } finally {
    commit("setLoading", false);
  }
}

async function favorite({ commit }, id) {
  commit("setProductFavorite", id);
}

async function unFavorite({ commit }, id) {
  commit("unSetProductFavorite", id);
}

async function addBasket({ commit }, product) {
  commit("addBasket", product);
}

async function removeBasket({ commit }, product) {
  commit("removeBasket", product);
}

async function clearBasket({ commit }) {
  commit("clearBasket");
}

export default { listAllProducts, favorite, unFavorite, addBasket, removeBasket, clearBasket };
