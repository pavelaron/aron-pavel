<template>
  <div class="container-programming">
    <div class="icon-programming" :style="{
      'background-image': `url(${src})`
    }"></div>
    <div class="programming-name" v-html="name"></div>
  </div>
</template>

<script>
export default {
  name: 'programming',
  props: {
    src: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.icon-programming {
  width: 80px;
  height: 80px;
  margin: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  animation: lds-rotate 1.5s infinite;
}

.programming-name {
  color: white;
  text-align: center;
}

@keyframes lds-rotate {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(359deg);
  }
}
</style>
