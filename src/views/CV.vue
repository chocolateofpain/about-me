<template>
  <div class='cv-container'>
    <h1>CV</h1>
    <h3 class='cv-section'>Experience</h3>
    <h4 class='company'>{{ sauceLabsJunior.company }}</h4>
    <p class='role-title'>{{ sauceLabsJunior.title }}</p>
    <p class='time-range'>{{ sauceLabsJunior.timeRange }}</p>
    <ul class='section-gap'>
      <li v-for="(item, index) in sauceLabsJunior.experience" :key='index' >{{ item }}</li>
    </ul>
    <h4 class='company'>{{ sauceLabsIntern.company }}</h4>
    <p class='role-title'>{{ sauceLabsIntern.title }}</p>
    <p class='time-range'>{{ sauceLabsIntern.timeRange }}</p>
    <ul>
      <li v-for="(item, index) in sauceLabsIntern.experience" :key='index' >{{ item }}</li>
    </ul>
     <h3 class='education cv-section'>Education</h3>
    <h4 class='company'>{{ dciTraining.company }}</h4>
    <p class='role-title'>{{ dciTraining.title }}</p>
    <p class='time-range'>{{ dciTraining.timeRange }}</p>
    <p>Studied web development during 11 months course which covered:</p>
    <ul>
      <li v-for="(item, index) in dciTraining.experience" :key='index' >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { dciTraining, sauceLabsJunior, sauceLabsIntern } from '../components/cv-data';

export default {
  name: 'CV',
  data () {
    return { dciTraining, sauceLabsJunior,  sauceLabsIntern }
  },
}
</script>

<style scoped>
ul {
  list-style-type: circle;
  margin: 0;
  padding: 0;
}
.cv-container {
  text-align: start;
}
.education {
  margin-top: 40px;
}
.time-range {
  font-size: 0.8rem;
  margin-top: 4px;
}
.role-title {
  margin: 8px 0;
  font-weight: 500;
}
.company {
  margin: 20px 0 8px 0;
  font-weight: 600;
}
h1 {
  text-align: center;
}
h3 {
  font-size: 1.1rem;
}
.cv-section {
  font-size: 1.3rem;
}
.section-gap {
  margin-bottom: 40px;
}
</style>
