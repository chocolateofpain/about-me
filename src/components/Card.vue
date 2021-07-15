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
  height: 300px;
  padding: 10px;
  width: 250px;
  -webkit-box-shadow: 4px 4px 15px 5px rgba(125,125,125,0.6); 
  box-shadow: 4px 4px 15px 5px rgba(125,125,125,0.6);
}
</style>
