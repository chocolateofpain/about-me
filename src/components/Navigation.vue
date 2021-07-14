<template>
  <div class='navigation-container'>
    <h1>Elisabeth Vonesch</h1>
    <ul class='navigation-links'>
      <li><a>Main</a></li>
      <li><a>About Me</a></li>
      <li><a>CV</a></li>
      <li><a>Contact</a></li>
      <li><a>Miscellaneous</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
h1 {
  padding: 0 30px;
}
ul {
  align-items: center;
}
li {
  padding: 0 20px;
}
.navigation-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
.navigation-links {
  display: flex;
}
</style>
