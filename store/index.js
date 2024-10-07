const state = () => ({
  speed: false,
  heading: {
    x: 0,
    y: 0
  }
})

const mutations = {
  accelerate (state, direction) {
    state.speed = direction
  },
  turn (state, heading) {
    state.heading = heading
  }
}

export {
  state,
  mutations
}
