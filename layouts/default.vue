<template>
  <div class="fullpage row">
    <background-page color="#EEE" :images="config.images"></background-page>
    <sidebar rotate="-90" :text="config.sidebarLeft.text"></sidebar>
    <div class="column column-80 content">
      <header-content :params="config.header"></header-content>

      <nuxt/>

      <footer-content :params="config.footer"></footer-content>
    </div>
    <sidebar rotate="90" :text="config.sidebarRight.text"></sidebar>
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
  }

  .fullpage {
    height: 100vh;
  }
</style>
