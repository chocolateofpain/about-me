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

h1 {
  padding: 30px 20px;
  font-size: 2rem;
  font-weight: 400;
}

.link {
  text-decoration: none;
  
}
.link:visited {
  color:#2c3e50;
}

.link:hover {
  font-weight: 600;
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
