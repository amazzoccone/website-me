<template>
  <div class="container-fullpage">
    <div class="row fullpage">
      <background-page :color="background.color" :images="background.images" />

      <div class="column layout-sidebar">
        <sidebar key="left" :color="general.color" :params="sidebarLeft" />
      </div>

      <div class="column layout-content">
        <header-content :params="header" />

        <div class="row">
          <nuxt/>
        </div>

        <div class="row">
          <footer-content :params="footer" />
        </div>
      </div>

      <div class="column layout-sidebar">
        <sidebar key="right" :color="general.color" :params="sidebarRight" />
      </div>
    </div>
  </div>
</template>

<script>
  import BackgroundPage from '~/components/layout/Background.vue'
  import FooterContent from '~/components/layout/Footer.vue'
  import HeaderContent from '~/components/layout/Header.vue'
  import Sidebar from '~/components/layout/Sidebar.vue'

  export default {
    computed: {
      config () {
        return _.get(this.$store.state, 'layout');
      },
      general() {
        return _.get(this.config, 'general', {});
      },
      background() {
        let params = _.clone(this.general);
        return _.merge(params, _.get(this.config, 'background', {}));
      },
      footer() {
        let params = _.clone(this.general);
        return _.merge(params, _.get(this.config, 'footer', {}));
      },
      header() {
        let params = _.clone(this.general);
        return _.merge(params, _.get(this.config, 'header', {}));
      },
      sidebarLeft() {
        let params = _.clone(this.general);
        return _.merge(params, { position: 'left' }, _.get(this.config, 'sidebarLeft', {}));
      },
      sidebarRight() {
        let params = _.clone(this.general);
        return _.merge(params, { position: 'right' }, _.get(this.config, 'sidebarRight', {}));
      }
    },
    components: {
      BackgroundPage,
      FooterContent,
      HeaderContent,
      Sidebar
    },
    mounted() {
      var html = document.getElementsByTagName('html')[0];
      html.style.setProperty("--color", this.general.color);
    }
  }
</script>

<style>
  @import '~/assets/css/variables.css';

  /* Mobile First Media Queries */

  /* Base style */
  html {
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

  .container-fullpage {
    height: 100vh;
    margin: 0 auto;
    position: relative;
    width: 100%;
  }
  .row.fullpage {
    margin-left: 0;
    width: 100%;
    padding: 0;
  }

  .layout-sidebar {
    display: none !important;
  }

  @media (--small) {
    .layout-content {
      -webkit-box-flex: 0 !important;
      -ms-flex: 0 0 var(--layout-content-width) !important;
      flex: 0 0 var(--layout-content-width) !important;
      max-width: var(--layout-content-width) !important;
    }
    .layout-sidebar {
      display: block !important;
      -webkit-box-flex: 0 !important;
      -ms-flex: 0 0 var(--layout-sidebar-width) !important;
      flex: 0 0 var(--layout-sidebar-width) !important;
      max-width: var(--layout-sidebar-width) !important;
    }
  }
</style>
