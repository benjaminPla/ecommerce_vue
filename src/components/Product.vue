<template>
  <div class='card'>
    <i @click.prevent='add' class="fas fa-cart-plus" :productId='info.id'></i>
    <img :src='info.image' :alt='info.title' />
    <div class='text-container'>
      <h3>{{ info.title }}</h3>
      <p class='description'>{{ info.description }}</p>
      <span class='price'>$ {{ info.price }}</span>
      <span class='rate'>&#9733; {{ info.rating.rate }}</span>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'Product',
  props: ['info'],
  setup() {
    const store = useStore();
    const add = (product) => store.commit('addCart', product.target.getAttribute('productId'));
    return { add };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

.card {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 250px;
    object-fit: fill;
  }
  .text-container {
    text-align: left;
    padding: 20px;
    h3 {
      padding: 10px 0;
    }
    .description {
      font-size: 0.7rem;
      font-weight: 100;
      padding-bottom: 10px;
    }
    .price {
      color: $GreenColor;
      font-weight: 700;
      margin-right: 10px;
    }
    .rate {
      color: $RedColor;
    }
  }
}
</style>
