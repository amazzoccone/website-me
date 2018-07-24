<template>
  <div class="content">
    <work-info/>
  </div>
</template>

<script>
  import WorkInfo from '~/components/WorkInfo.vue';
  import layoutConfig from '~/assets/js/config/layout/work.js';

  export default {
    fetch ({ store, app }) {
      store.commit('layout', layoutConfig.get(app))
    },
    created() {
      this.$bus.$on('sidebar:clicked', (params) => {
        if (params.position == 'left') {
          //do nothing
        }
        else if (params.position == 'right') {
          this.$router.push(this.localePath('works'));
        }
      });

      this.$bus.$on('work-info:loaded', (params) => {
        this.$store.commit('setLayoutPage', params.page);
        this.$store.commit('setLayoutPages', params.pages);
        this.$store.commit('setLayoutSidebarLeft', params.work.title);

        let description = `${params.work.technique} / ${params.work.dimension}`;
        this.$store.commit('setLayoutSidebarRight', description);
      });
    },
    components: {
      WorkInfo
    }
  }
</script>

<style scoped>
  /* Mobile First Media Queries *//* Mobil

  /* Base style */
  .content {
    margin: 0 auto;
    height: 65vh;
    text-align: center;
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
