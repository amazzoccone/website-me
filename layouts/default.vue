<template>
  <div class="layout-fullpage row">
    <background-page color="#EEE" :images="config.images" />

    <div class="column layout-sidebar">
      <sidebar position="left" :text="sidebarLeft.text" :color="config.color"
        :pages="sidebarLeft.pages" :page="sidebarLeft.page" />
    </div>

    <div class="column layout-content">
      <header-content :params="header" />

      <nuxt/>

      <footer-content width="84%" :params="footer" />
    </div>

    <div class="column layout-sidebar">
      <sidebar position="right" :text="sidebarRight.text" :color="config.color"
        :pages="sidebarRight.pages" :page="sidebarRight.page" />
    </div>
  </div>
</template>

<script>
  import BackgroundPage from '~/components/Background.vue'
  import FooterContent from '~/components/Footer.vue'
  import HeaderContent from '~/components/Header.vue'
  import Sidebar from '~/components/Sidebar.vue'

  export default {
    computed: {
      config () {
        return this.$store.state.layout;
      },
      footer() {
        return _.get(this.config, 'footer', {});
      },
      header() {
        return _.get(this.config, 'header', {});
      },
      sidebarLeft() {
        return _.get(this.config, 'sidebarLeft', {});
      },
      sidebarRight() {
        return _.get(this.config, 'sidebarRight', {});
      }
    },
    components: {
      BackgroundPage,
      FooterContent,
      HeaderContent,
      Sidebar
    }
  }
</script>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    color: #FFF;
  }

  .layout-fullpage {
    height: 100vh;
  }
  .layout-content {
    -webkit-box-flex: 0 !important;
    -ms-flex: 0 0 84% !important;
    flex: 0 0 84% !important;
    max-width: 84% !important;
  }
  .layout-sidebar {
    -webkit-box-flex: 0 !important;
    -ms-flex: 0 0 8% !important;
    flex: 0 0 8% !important;
    max-width: 8% !important;
  }
</style>
