<template>
  <div id="app">
    <div class='container'>
      <router-view/>
      <router-view name="a"></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 30px 30px 30px;
}

#nav {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

#nav a {
  /* font-weight: bold; */
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #4c81c3;
}

h1 {
  padding: 30px 20px;
  font-size: 2rem;
  font-weight: 400;
}

.link {
  text-decoration: none;
}

.container {
  display: grid; 
  grid-template-columns: 300px 1fr; 
  grid-template-rows: 1fr; 
  gap: 20px; 
  grid-template-areas: 
    "nav content";
  justify-content: start;
}
</style>
