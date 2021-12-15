<template>
  <nav>
    LOGO
    <div>
      <router-link class='link' to="/">Home</router-link>
      <router-link class='link' to="/about">About</router-link>
      <span class='link'>Products: {{ cart.length }}</span>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'NavBar',
  setup() {
    const store = useStore();
    const cart = computed(() => store.state.cart);
    return { cart };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

nav {
  position: fixed;
  width: 100vw;
  z-index: 10;
  display: flex;
  background-color: $colorRed;
  background-color: #fff;
  padding: 5px 20px;
  justify-content: space-between;
  align-items: center;
  .link {
    margin-left: 20px;
  }
}
</style>
