import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  /* eslint-disable */
  mutations: {
    setProducts: (state, payload) => state.products = payload,
    addCart: (state, payload) => state.cart.push(payload),
  },
  /* eslint-enable */
  actions: {
    async getProducts({ commit }) {
      const products = await fetch('https://fakestoreapi.com/products?limit=12')
        .then((res) => res.json())
        // eslint-disable-next-line
        .catch((error) => console.log(error));
      commit('setProducts', products);
    },
  },
});
