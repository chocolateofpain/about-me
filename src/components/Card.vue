<template>
  <div class='card'>
    <img v-bind:src="getImgUrl(image)"  v-bind:alt="image" width="250" height="250"/> 
    <p class='title'>{{ title }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['title', 'image'],
    methods: {
      getImgUrl(image) {
        return require('../assets/'+image)
      }
    }
  }
</script>

<style scoped>
.title {
  text-decoration: none;
}
.card {
  position: relative;
  height: 300px;
  padding: 10px;
  width: 250px;
  -webkit-box-shadow: 4px 4px 10px 5px rgba(125,125,125,0.6); 
  box-shadow: 4px 4px 10px 5px rgba(125,125,125,0.6);
   -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.card:hover {
  -webkit-transform: scale(1.03, 1.03);
  transform: scale(1.03, 1.03);
}

/* Pre-render the bigger shadow, but hide it */
.card::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 4px 4px 17px 5px rgba(125, 125, 125, 0.65);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* Transition to showing the bigger shadow on hover */
.card:hover::after {
  opacity: 1;
}
</style>
