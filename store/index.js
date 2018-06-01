import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      layout: {}
    },
    mutations: {
      layout (state, config) {
        state.layout = config;
      },
      setLayoutPage(state, page) {
        state.layout.background.page = page;
      }
    }
  })
}

export default createStore
