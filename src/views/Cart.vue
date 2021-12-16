<template>
  <h1>Cart</h1>
  <product v-for='(product, index) in products' :key='index' :info='product'/>
</template>

<script>
import { useStore } from 'vuex';
import { ref, computed, onMounted } from 'vue';
import Product from '../components/Product.vue';

export default {
  name: 'Cart',
  components: { Product },
  setup() {
    const store = useStore();
    const cart = computed(() => store.state.cart);
    const products = ref([]);
    onMounted(() => {
      cart.value.map(async (product) => {
        const data = await fetch(`https://fakestoreapi.com/products/${product}`)
          .then((res) => res.json())
        // eslint-disable-next-line
        .catch((error) => console.log(error));
        products.value.push(data);
      });
    });
    return { products };
  },
};
</script>
