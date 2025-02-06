<template>
  <div id="app">
    <main :class="{ 'ios': $device.ios, 'pwa': isPWA }">
      <space ref="space" :content-window="contentWindow" />
      <ship ref="ship" :content-window="contentWindow" />
      <div id="overlay" ref="overlay" />
      <hamburger :onreset="resetPosition" />
    </main>
  </div>
</template>

<script>
import { supportsPassiveEvents } from 'detect-passive-events'
import Hamburger from '@/components/Hamburger'
import Space from '@/components/Space'
import Ship from '@/components/Ship'
import FirebaseHandler from '@/handlers/firebase-handler'

export default {
  name: 'App',
  components: {
    Hamburger,
    Space,
    Ship
  },
  data () {
    return {
      isPWA: 'standalone' in window.navigator && window.navigator.standalone,
      contentWindow: {
        width: 0,
        height: 0
      }
    }
  },
  created () {
    const firebaseHandler = new FirebaseHandler(this)
    firebaseHandler.logEvent(this, 'App initialized')
  },
  mounted () {
    this.resize()
    this.initControls()

    window.onresize = this.resize
  },
  beforeDestroy () {
    this.unsubscribe()
  },
  methods: {
    initControls () {
      const { overlay, ship } = this.$refs

      if ('ontouchstart' in overlay) {
        this.listenFor('touchstart', () => ship.accelerate(true))
        this.listenFor('touchend', () => ship.accelerate(false))
        this.listenFor('touchcancel', () => ship.accelerate(false))
        this.listenFor('touchmove', ship.rotate)
      }

      this.listenFor('mousedown', () => ship.accelerate(true))
      this.listenFor('mouseup', () => ship.accelerate(false))
      this.listenFor('mousemove', ship.rotate)
    },
    listenFor (event, callback) {
      const options = supportsPassiveEvents ? { passive: true } : false
      this.$refs.overlay.addEventListener(event, callback, options)
    },
    removeListener (event, callback) {
      this.$refs.overlay.removeEventListener(event, callback)
    },
    resize () {
      this.contentWindow = {
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    resetPosition () {
      this.$refs.space.reset()
      this.$refs.ship.reset()
    },
    unsubscribe () {
      const { overlay, ship } = this.$refs

      if ('ontouchstart' in overlay) {
        this.removeListener('touchstart', () => ship.accelerate(true))
        this.removeListener('touchend', () => ship.accelerate(false))
        this.removeListener('touchcancel', () => ship.accelerate(false))
        this.removeListener('touchmove', ship.rotate)
      }

      this.removeListener('mousedown', () => ship.accelerate(true))
      this.removeListener('mouseup', () => ship.accelerate(false))
      this.removeListener('mousemove', ship.rotate)
    }
  }
}
</script>

<style scoped>
main, #app {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

main {
  top: 0;
}

#app {
  top: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: black;

  #overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
    cursor: crosshair;
  }
}
</style>
