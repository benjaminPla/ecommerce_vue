<template>
  <nav>
    LOGO
    <div>
      <router-link class='link' to="/">Home</router-link>
      <router-link class='link' to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped lang='scss'>
nav {
  display: flex;
  background: red;
  padding: 5px 20px;
  justify-content: space-between;
  align-items: center;
  .link {
    margin-left: 20px;
  }
}
</style>
