<template>
  <div class='grid'>
    <div v-for='(product, index) in products' :key='index'>
      <img :src='product.image' :alt='product.title' />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid4',
  props: ['products'],
};
</script>

<style scoped lang='scss'>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  img {
    width: 100px;
    height: 100px;
    object-fit: fill;
  }
}
</style>
