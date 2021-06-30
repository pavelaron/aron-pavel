import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => new Vuex.Store({
  state: {
    cvUrl: null,
    speed: false,
    heading: {
      x: 0,
      y: 0
    }
  },
  mutations: {
    accelerate (state, direction) {
      state.speed = direction
    },
    turn (state, heading) {
      state.heading = heading
    }
  }
})
