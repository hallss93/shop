async function listAllProducts({ commit }) {
  try {
    const { data } = await this.axios.get(`https://fakestoreapi.com/products`);
    commit("setListProducts", data);
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

async function favorite({ commit }, id) {
  commit("setProductFavorite", id);
}

async function unFavorite({ commit }, id) {
  commit("unSetProductFavorite", id);
}

async function addCart({ commit }, product) {
  commit("addCart", product);
}

async function removeCart({ commit }, product) {
  commit("removeCart", product);
}

export default { listAllProducts, favorite, unFavorite, addCart, removeCart };
