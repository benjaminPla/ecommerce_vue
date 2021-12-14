<template>
  <nav-bar />
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar },
};
</script>

<style lang="scss">
@import './assets/variables';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: $BlackDarkColor;
}
a,
a:hover,s
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
.fas, .far {
  font-family: "Font Awesome 5 Free" !important;
}
.fab {
  font-family: "Font Awesome 5 Brands" !important;
}
body {
  background-color: $colorPink;
  font-family: 'Roboto', sans-serif;
}
</style>
