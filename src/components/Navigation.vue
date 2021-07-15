<template>
  <div class='navigation-container'>
    <h1>Elisabeth Vonesch</h1>
    <div class='navigation-links'>
      <router-link class='link link-nav' to="/">Home</router-link>
      <router-link class='link link-nav' to="/about">About</router-link>
      <router-link class='link link-nav' to="/cv">CV</router-link>
      <router-link class='link link-nav' to="/contact">Contact</router-link>
      <router-link class='link link-nav' to="/miscellaneous">Miscellaneous</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
.navigation-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  text-align: start;
}
.navigation-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.link-nav {
  padding: 30px 20px;
}

.navigation-container a.router-link-exact-active {
  font-weight: bold;
}

</style>
