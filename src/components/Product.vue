<template>
  <div class='card'>
    <img :src='info.image' :alt='info.title' />
    <h3>{{ info.title }}</h3>
    <span>{{ info.price }}</span>
    <span class='rate'>{{ info.rating.rate }} &#9733;</span>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['info'],
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

.card {
  background-color: $colorRed;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 250px;
    object-fit: fill;
  }
  p {
    color: $GreenColor;
    font-weight: 700;
  }
  .rate {
    color: $RedColor;
  }
}
</style>
