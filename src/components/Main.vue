<template>
  <div id="main">
    <div class='card-grid-container'>
    <router-link class='link' to="/about"><Card image='berlin.jpg' title='About me' /></router-link>
    <router-link class='link' to="/cv"><Card image='berlin_png.png' title='CV' /></router-link>
    <router-link class='link' to="/contact"><Card image='metro.png' title='Contact'/></router-link>
    <router-link class='link' to="/miscellaneous"><Card image='palmtree.png' title='Miscellaneous'/></router-link>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Main',
  components: {
    Card,
  }
}
</script>

<style>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.card-grid-container {
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 20px; 
  grid-template-areas: 
    "about cv"
    "miscellaneous contact"; 
  justify-content: center;
  justify-items: center;
  width: 60vw;
}
.about { grid-area: about; }
.cv { grid-area: cv; }
.miscellaneous { grid-area: miscellaneous; }
.contact { grid-area: contact; }
</style>
