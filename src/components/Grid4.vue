<template>
  <div class='grid'>
    <product v-for='(item, index) in data' :key='index' :info='item' />
  </div>
</template>

<script>
import Product from './Product.vue';

export default {
  name: 'Grid4',
  props: ['data'],
  components: { Product },
};
</script>

<style scoped lang='scss'>
.grid {
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 80%;
  text-align: center;
}
</style>
