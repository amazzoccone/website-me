<template>
  <div class="content">
    <work-grid class="animated fadeInDown slower"/>
  </div>
</template>

<script>
  import WorkGrid from '~/components/WorkGrid.vue';
  import layoutConfig from '~/assets/js/config/layout/works.js';

  export default {
    fetch ({ store, app }) {
      store.commit('layout', layoutConfig.get(app))
    },
    mounted() {
      this.updateStoreByQueryPage(this.queryPage);

      this.$bus.$on('sidebar:clicked', (params) => {
        if (params.position == 'left') {
          // this.showAboutModal();
        }
        else if (params.position == 'right') {
          this.$router.push(this.localePath('index'));
        }
      });

      this.$bus.$on('page-label:top', () => {
        this.$router.push(this.localePath({name: 'works', query: {page: this.queryPage-1}}));
      });
      this.$bus.$on('page-label:bottom', () => {
        this.$router.push(this.localePath({name: 'works', query: {page: this.queryPage+1}}));
      });
    },
    computed: {
      queryPage() {
        return parseInt(this.$route.query.page || 1);
      },
      totalPages() {
        return parseInt(this.$store.state.layout.general.pages || 0);
      },
      headerLabel() {
        return this.$store.state.layout.header.label;
      },
      footerLabel() {
        return this.$store.state.layout.footer.label;
      }
    },
    methods: {
      updateStoreByQueryPage(page) {
        this.$store.commit('setLayoutPage', parseInt(page));

        if (page <= 1) {
          this.$store.commit('setLayoutHeaderLabel', {});
          this.$store.commit('setLayoutFooterLabel', {
            text: 'scroll'
          });
        }
        else if (page >= this.totalPages) {
          this.$store.commit('setLayoutHeaderLabel', {
            text: 'previous',
          });
          this.$store.commit('setLayoutFooterLabel', {});
        }
        else {
          this.$store.commit('setLayoutHeaderLabel', {
            text: 'previous',
          });
          this.$store.commit('setLayoutFooterLabel', {
            text: 'next',
          });
        }
      }
    },
    watch: {
      '$route.query' (newVal, oldVal) {
        this.updateStoreByQueryPage(newVal.page);
      }
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
