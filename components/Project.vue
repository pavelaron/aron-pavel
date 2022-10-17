<template>
  <div class="container-project">
    <div
      class="icon-project"
      :style="{
        'background-image': `url(${src})`
      }"
    />
    <div class="title-project">
      {{ title }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'Project',
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.icon-project {
  width: 80px;
  height: 80px;
  margin: 10px;
  background-size: contain;
  background-repeat: no-repeat;
}

.title-project {
  color: white;
  text-align: center;
}
</style>
