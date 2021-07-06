<template>
  <div>
    <div id="ship" :style="{ 'transform': `translate(-50%, -50%) rotate(${rotation}deg)` }">
      <div v-if="thrustersOn" id="container-exhaust" :style="{ 'height': `${exhaustLength}px` }">
        <div class="exhaust left"></div>
        <div class="exhaust right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ship',
  props: ['contentWindow'],
  watch: {
    contentWindow () {
      this.resize()
    }
  },
  data () {
    return {
      thrustersOn: false,
      rotation: 180,
      exhaustLength: 0,
      windowCenter: {
        x: 0,
        y: 0
      }
    }
  },
  mounted () {
    this.resize()
  },
  methods: {
    resize () {
      this.windowCenter = {
        x: Math.floor(window.innerWidth / 2),
        y: Math.floor(window.innerHeight / 2)
      }
    },
    rotate (event) {
      const { clientX, clientY } = (event.touches && event.touches[0]) || event
      const headingX = clientX - this.windowCenter.x
      const headingY = clientY - this.windowCenter.y

      const thrust = Math.hypot(headingX, headingY)
      const shorterSide = Math.min(window.innerWidth, window.innerHeight) / 2

      this.exhaustLength = Math.floor(thrust / shorterSide * 30)
      this.rotation = Math.atan2(-headingY, -headingX) / Math.PI * 180 - 90
      this.$store.commit('turn', {
        x: headingX,
        y: headingY
      }, { root: true })
    },
    accelerate (value) {
      this.thrustersOn = value
      this.$store.commit('accelerate', value, { root: true })
    },
    reset () {
      this.rotation = 180
    }
  }
}
</script>

<style>
#ship {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 128px;
  height: 128px;
  background-image: url('~@/assets/images/ship.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

#container-exhaust {
  position: relative;
  max-height: 30px;
}

.exhaust {
  position: absolute;
  width: 5px;
  top: 128px;
  height: 100%;
  background: white;
  background: linear-gradient(180deg, white 0%, red 50%, transparent 100%);
}

.exhaust.left {
  left: 45px;
}

.exhaust.right {
  right: 45px;
}
</style>
