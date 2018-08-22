<template>
  <div class="container-fullpage" :style="cssBaseProps">
    <div class="row fullpage">
      <background-page :color="background.color" :images="background.images" />

      <div class="column layout-sidebar">
        <sidebar class="animated fadeInLeft slower delay-2s" key="left" :color="general.color" :params="sidebarLeft" />
      </div>

      <div class="column layout-content">
        <header-content :params="header" class="animated fadeInDown slower delay-4s"/>

        <div class="row animated fadeIn slower">
          <nuxt/>
        </div>

        <footer-content :params="footer" class="animated fadeInUp slower delay-4s"/>
      </div>

      <div class="column layout-sidebar">
        <sidebar class="animated fadeInRight slower delay-2s" key="right" :color="general.color" :params="sidebarRight" />
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
      },
      color() {
        return this.general.color;
      },
      backgroundColor() {
        return this.background.color;
      },
      cssBaseProps() {
        return {
          color: 'var(--color)'
        }
      }
    },
    methods: {
      setCssVariable(name, value) {
        document.documentElement.style.setProperty(name, value);
      }
    },
    mounted() {
      this.setCssVariable('--color', this.color);

      if (this.backgroundColor) {
          this.setCssVariable('--background-color', this.backgroundColor);
      }
    },
    watch: {
      color(newVal, oldVal) {
        this.setCssVariable('--color', newVal);

        return newVal;
      },
      backgroundColor(newVal, oldVal) {
        this.setCssVariable('--background-color', newVal);

        return newVal;
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
  @import '~/assets/css/variables.css';

  /* Mobile First Media Queries */

  /* Base style */
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

  @media (min-width: 40.0rem) {
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
