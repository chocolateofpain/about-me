<template>
  <div>
    <h1>CV</h1>
    <h3>Experience</h3>
    <h4>{{ sauceLabsJunior.company }}</h4>
    <p>{{ sauceLabsJunior.title }}</p>
    <p>{{ sauceLabsJunior.timeRange }}</p>
    <ul>
      <li v-for="(item, index) in sauceLabsJunior.experience" :key='index' >{{ item }}</li>
    </ul>
    <h4>{{ sauceLabsIntern.company }}</h4>
    <p>{{ sauceLabsIntern.title }}</p>
    <p>{{ sauceLabsIntern.timeRange }}</p>
    <ul>
      <li v-for="(item, index) in sauceLabsIntern.experience" :key='index' >{{ item }}</li>
    </ul>
     <h3>Education</h3>
    <h4>{{ dciTraining.company }}</h4>
    <p>{{ dciTraining.title }}</p>
    <p>{{ dciTraining.timeRange }}</p>
    <p>Studied web development during 11 months course which covered:</p>
    <ul>
      <li v-for="(item, index) in dciTraining.experience" :key='index' >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { dciTraining, sauceLabsJunior, sauceLabsIntern } from './cv-data';

export default {
  name: 'CV',
  data () {
    return { dciTraining, sauceLabsJunior,  sauceLabsIntern }
  },
}
</script>
