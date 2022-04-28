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

export default { listAllProducts };
