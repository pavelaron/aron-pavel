<template>
  <div class="space-element" :style="{ 'left': `${x}px`, top: `${y}px` }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SpaceElement',
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.space-element {
  position: absolute;
}
</style>
