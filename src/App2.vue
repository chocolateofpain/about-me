<template>
  <div id="app">
    <Navigation />
    <div class='card-grid-container'>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Card image='berlin.png' title='About me' />
    <Card image='beach.png' title='CV' />
    <Card image='metro.png' title='Contact'/>
    <Card image='palmtree.png' title='Miscellaneous'/>
    </div>
    <!-- <CV />
    <Contact /> -->
    <div id="components-demo">
</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card.vue'
import Contact from './components/Contact.vue'
import CV from './components/CV.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Card,
    // Contact,
    // CV,
    Navigation,
  }
}
</script>

<style>
#app {
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
