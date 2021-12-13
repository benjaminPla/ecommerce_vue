import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
  },
  /* eslint-disable */
  mutations: {
    setProducts: (state, payload) => state.products = payload,
  },
  /* eslint-enable */
  actions: {
    async getProducts({ commit }) {
      const products = await fetch('https://fakestoreapi.com/products?limit=12')
        .then((res) => res.json())
        .catch((error) => console.log(error));
      commit('setProducts', products);
    },
  },
});
