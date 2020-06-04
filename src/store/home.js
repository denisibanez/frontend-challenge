export default {
  state: {
    example: null,
  },

  mutations: {
    example(state, param) {
      state.example = param
    },
  },

  actions: {
    example(context, param) {
      context.commit('example', param)
    },
  },

  getters: {
    example: state => {
      return state.example
    },
  }
}