<template>
  <div id="space" :style="{
    'background-size': `${backgroundSize / 2}px`,
    'background-position': `${bgPosition.x}px ${bgPosition.y}px`
  }">
    <container ref="container" :style="{
      'transform': `translate3d(${position.x}px, ${position.y}px, 0)`
    }" />
  </div>
</template>

<script>
import Container from '@/components/Container'
import SpaceElement from '@/components/SpaceElement'

export default {
  name: 'space',
  props: ['contentWindow'],
  components: {
    Container
  },
  watch: {
    contentWindow () {
      this.setContentBounds()
    }
  },
  data () {
    return {
      backgroundSize: 1920,
      contentBounds: {
        min: {
          x: 0,
          y: 0
        },
        max: {
          x: 0,
          y: 0
        }
      },
      position: {
        x: 0,
        y: 0
      },
      bgPosition: {
        x: 0,
        y: 0
      }
    }
  },
  created () {
    this.unsubscribe = this.$store.subscribe((mutation) => {
      if (mutation.type === 'accelerate') {
        window.requestAnimationFrame(this.move)
      }
    })
  },
  mounted () {
    this.setContentBounds()
  },
  methods: {
    setContentBounds () {
      const spaceElements = this.$refs.container.$children.filter((child) => (
        child.$options.name === SpaceElement.name
      ))

      const xMin = Math.min(...spaceElements.map((element) => element.x))
      const yMin = Math.min(...spaceElements.map((element) => element.y))

      const xMax = Math.max(...spaceElements.map((element) => element.x + element.$el.clientWidth))
      const yMax = Math.max(...spaceElements.map((element) => element.y + element.$el.clientHeight))

      this.contentBounds = {
        min: {
          x: xMin - window.innerWidth * 2,
          y: yMin - window.innerHeight * 2
        },
        max: {
          x: xMax + window.innerWidth * 2,
          y: yMax + window.innerHeight * 2
        }
      }
    },
    move () {
      const heading = this.$store.state.heading

      this.position.x = this.updateLocation('x', this.position.x - heading.x / 100)
      this.position.y = this.updateLocation('y', this.position.y - heading.y / 100)

      this.bgPosition.x = this.updateBackgroundLocation('x', heading)
      this.bgPosition.y = this.updateBackgroundLocation('y', heading)

      if (this.$store.state.speed) {
        window.requestAnimationFrame(this.move)
      }
    },
    updateLocation (axis, value) {
      if (value < -this.contentBounds.max[axis]) {
        return -this.contentBounds.min[axis]
      } else if (value > -this.contentBounds.min[axis]) {
        return -this.contentBounds.max[axis]
      }

      return value
    },
    updateBackgroundLocation (axis, heading) {
      const tilesMax = this.backgroundSize * 2

      if (Math.abs(this.bgPosition[axis]) >= tilesMax) {
        return this.bgPosition[axis] - tilesMax * Math.sign(this.bgPosition[axis])
      }

      return this.bgPosition[axis] - heading[axis] / 200
    },
    reset () {
      this.position = {
        x: 0,
        y: 0
      }

      this.bgPosition = {
        x: 0,
        y: 0
      }
    }
  },
  beforeDestroy () {
    this.unsubscribe()
  }
}
</script>

<style>
#space {
  width: 100%;
  height: 100%;
  background-image: url('~/static/img/bg-space.jpg');
  content-visibility: auto;
  background-repeat: repeat;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
</style>
