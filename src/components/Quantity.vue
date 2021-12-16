<template>
  <button @click.prevent='quantity > 0 && quantity --'>-</button>
  <span>{{ quantity }}</span>
  <button @click.prevent='quantity ++'>+</button>
  <span>Total: ${{ data.price * quantity }}</span>
  <i @click.prevent='add' class="fas fa-cart-plus" :productId='data.id'></i>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'Quantity',
  props: ['data'],
  setup() {
    const store = useStore();
    const quantity = ref(0);
    const add = (product) => store.commit('addCart', product.target.getAttribute('productId'));
    return { quantity, add };
  },
};
</script>

<style scoped lang='scss'>

</style>
