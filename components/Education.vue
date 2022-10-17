<template>
  <div class="education">
    <div class="img" :style="{ 'background-image': `url('${image}')` }" />
    <div>{{ interval }}</div>
    <h3>{{ school }}</h3>
    <p>{{ graduation }}</p>
  </div>
</template>

<script>
export default {
  name: 'Education',
  props: {
    image: {
      type: String,
      required: true
    },
    interval: {
      type: String,
      required: true
    },
    school: {
      type: String,
      required: true
    },
    graduation: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.education {
  text-align: center;
}

.education .img {
  width: 280px;
  height: 280px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: auto;
  padding-bottom: 30px;
}
</style>
