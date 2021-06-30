<template>
  <div id="arrow" :style="{
    'width': `${size}px`,
    'height': `${size}px`,
    'transform': `rotate(${angle}deg)`
  }"></div>
</template>

<script>
export default {
  name: 'arrow',
  props: {
    angle: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 80
    }
  }
}
</script>

<style scoped>
#arrow {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('~@/assets/images/arrow-256.png');
}
</style>
