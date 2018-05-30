<template>
  <div class="fullpage row">
    <background-page color="#EEE" :images="background.images"></background-page>
    <sidebar rotate="-90" :text="sidebarLeft.text"></sidebar>
    <div class="column column-80 content">
      <header-content :params="header"></header-content>

      <nuxt/>

      <footer-content width="80%" :params="footer"></footer-content>
    </div>
    <sidebar rotate="90" :text="sidebarRight.text"></sidebar>
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
      background() {
        return this.config;
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

  .fullpage {
    height: 100vh;
  }
</style>
