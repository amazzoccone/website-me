<template>
  <div class="content">
    <home />
  </div>
</template>

<script>
  import Home from '~/components/Home.vue';
  import layoutConfig from '~/assets/js/config/layout/index.js';

  export default {
    transition: {
      name: 'home-page-transition',
      enterActiveClass: 'animated fadeIn',
      // leaveActiveClass: 'animated fadeOut'
    },
    fetch ({ store, app }) {
      store.commit('layout', layoutConfig.get(app))
    },
    mounted() {
      this.$bus.$on('background:change', (page) => {
        this.$store.commit('setLayoutPage', page);
      });

      this.$bus.$on('sidebar:clicked', (params) => {
        if (params.position == 'left') {
          // this.showAboutModal();
        }
        else if (params.position == 'right') {
          //TODO: Fix this! Cause an error when iterates route
          this.$router.push(this.localePath({name: 'works'}));
        }
      });
    },
    components: {
      Home
    }
  }
</script>

<style>
  /* Mobile First Media Queries *//* Mobil

  /* Base style */
  .content {
    margin: 0 auto;
    margin-top: 10vh;
    width: 70%;
  }


  /* Larger than mobile screen */
  @media (min-width: 40.0rem) {
    .content {
      margin-top: 15vh;
      width: 60%;
    }
  }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) { }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) { }

</style>
