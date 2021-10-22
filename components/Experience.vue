<template>
  <div class="experience">
    <div class="img" :style="{ 'background-image': `url('${logo}')` }"></div>
    <div class="centered">
      <div>{{ interval }}</div>
      <h3>{{ company }}</h3>
      <div>Assignments:&nbsp;</div>
    </div>
    <ul>
      <li v-for="(assignment, index) in assignments" :key="index">
        {{ assignment }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'experience',
  props: {
    logo: {
      type: String,
      required: true
    },
    interval: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    assignments: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.experience {
  width: 280px;
}

.experience .img {
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: auto;
  padding-bottom: 50px;
}

.centered {
  text-align: center;
}
</style>