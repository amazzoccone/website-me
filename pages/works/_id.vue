<template>
  <div class="content">
    <work-info />
  </div>
</template>

<script>
  import WorkInfo from '~/components/WorkInfo.vue';
  import layoutConfig from '~/assets/js/config/layout/work.js';

  export default {
    transition: {
      name: 'work-info-page-transition',
      enterActiveClass: 'animated pulse',
      // leaveActiveClass: 'animated zoomOut'
    },
    fetch ({ store, app }) {
      store.commit('layout', layoutConfig.get(app))
    },
    data() {
      return {
        params: null
      }
    },
    mounted() {
      this.$bus.$on('sidebar:clicked', (params) => {
        if (params.position == 'right' && params.clicked == 'top') {
          this.$router.push(this.localePath({name: 'works'}));
        }
      });

      this.$bus.$on('work-info:loaded', (params) => {
        this.params = params;
        this.$store.commit('setLayoutPage', params.page);
        this.$store.commit('setLayoutPages', params.pages);
        this.$store.commit('setLayoutSidebarLeft', params.work.title);

        let description = `${params.work.technique} / ${params.work.dimension}`;
        this.$store.commit('setLayoutSidebarRight', description);

        this.updatePageLabels(params.prevWork, params.nextWork);
      });

      this.$bus.$on('page-label:top', () => {
        this.changePageWork(this.params.prevWork);
      });
      this.$bus.$on('page-label:bottom', () => {
        this.changePageWork(this.params.nextWork);
      });
    },
    methods: {
      changePageWork(work) {
        this.$router.push(this.localePath({name: 'works-id', params: {id: work.id}}));
      },
      updatePageLabels(prev, next) {
        if (!prev) {
          this.$store.commit('setLayoutHeaderLabel', {});
          this.$store.commit('setLayoutFooterLabel', {
            text: 'next'
          });
        }
        else if (!next) {
          this.$store.commit('setLayoutHeaderLabel', {
            text: 'previous',
          });
          this.$store.commit('setLayoutFooterLabel', {});
        }
        // else {
        //   this.$store.commit('setLayoutHeaderLabel', {
        //     text: 'previous',
        //   });
        //   this.$store.commit('setLayoutFooterLabel', {
        //     text: 'next',
        //   });
        // }
      }
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
