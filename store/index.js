import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      layout: {},
      works: []
    },
    mutations: {
      layout (state, config) {
        state.layout = config;
      },
      setLayoutPage(state, page) {
        state.layout.general.page = page;
      },
      setLayoutPages(state, pages) {
        state.layout.sidebarLeft.pages = pages;
        state.layout.sidebarRight.pages = pages;
      },

      works (state, data) {
        state.works = data;
      },
    }
  })
}

export default createStore
