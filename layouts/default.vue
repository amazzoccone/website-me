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
          <footer-content width="88%" :params="footer" />
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
    }
  }
</script>

<style>
  /* Mobile First Media Queries */

  /* Base style */
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

  /* Larger than mobile screen */
  @media (min-width: 40.0rem) {
    .layout-content {
      -webkit-box-flex: 0 !important;
      -ms-flex: 0 0 88% !important;
      flex: 0 0 88% !important;
      max-width: 88% !important;
    }
    .layout-sidebar {
      display: block !important;
      -webkit-box-flex: 0 !important;
      -ms-flex: 0 0 6% !important;
      flex: 0 0 6% !important;
      max-width: 6% !important;
    }
  }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) { }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) { }
</style>
