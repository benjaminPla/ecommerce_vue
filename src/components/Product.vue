<template>
  <div class='card'>
    <img :src='info.image' :alt='info.title' />
    <h3>{{ info.title }}</h3>
    <p>{{ info.price }}</p>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['info'],
};
</script>

<style scoped lang='scss'>
.card {
  background-color: red;
  border-radius: 10px;
  img {
    width: 200px;
  }
}
</style>
