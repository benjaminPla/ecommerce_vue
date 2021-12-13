<template>
  <img alt='banner' src='../assets/banner.jpeg'>
  <div class='container'>
    <grid4 :data='products'/>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import Grid4 from '../components/Grid4.vue';

export default {
  name: 'Home',
  components: { Grid4 },
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);
    onMounted(() => store.dispatch('getProducts'));
    return { products };
  },
};
</script>

<style scoped lang='scss'>
img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 0% 0%;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
