<template>
  <div class="content">
    <work-grid />
  </div>
</template>

<script>
  import WorkGrid from '~/components/WorkGrid.vue';
  import layoutConfig from '~/assets/js/config/layout/works.js';

  export default {
    fetch ({ store, app }) {
      store.commit('layout', layoutConfig.get(app))
    },
    created() {
      this.$bus.$on('sidebar:clicked', (params) => {
        if (params.position == 'left') {
          // this.showAboutModal();
        }
        else if (params.position == 'right') {
          this.$router.push(this.localePath('works'));
        }
      });

      this.$bus.$on('work-grid:loaded', (params) => {
        this.$store.commit('setLayoutPage', params.page);
        this.$store.commit('setLayoutPages', params.pages);
      });

      this.$bus.$on('work-grid:page-changed', (page) => {
        this.$store.commit('setLayoutPage', page);
      });
    },
    components: {
      WorkGrid
    }
  }
</script>

<style scoped>
  /* Mobile First Media Queries *//* Mobil

  /* Base style */
  .content {
    margin: 0 auto;
    width: 85%;
  }


  /* Larger than mobile screen */
  @media (min-width: 40.0rem) { }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) {
    .content {
      width: 70%;
    }
  }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) { }

</style>
