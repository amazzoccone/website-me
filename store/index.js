import Vuex from 'vuex'
import Vue from 'vue'

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
        Vue.set(state.layout.general, 'page', page);
      },
      setLayoutPages(state, pages) {
        Vue.set(state.layout.sidebarLeft, 'pages', pages);
        Vue.set(state.layout.sidebarRight, 'pages', pages);
      },

      works (state, data) {
        state.works = data;
      },
    }
  })
}

export default createStore
