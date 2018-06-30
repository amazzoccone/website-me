<template>
  <div class="content grid">
    <work-card v-for="(work, key) in works" :key="key"
      :title="work.title"
      :technique="work.technique"
      :dimension="work.dimension"
      :image="work.image"
    />
  </div>
</template>

<script>
  import WorkCard from '~/components/WorkCard.vue';
  import works from '~/assets/js/works.js';

  export default {
    data() {
      return {
        page: 1,
        cardsPerRow: 3,
        works: works.get(this)
      }
    },
    fetch ({ store, app }) {
      let pages = 3;

      store.commit('layout', {
        general: {
          color: 'black',
          page: 1
        },
        background: {
          color: 'white'
        },
        sidebarLeft: {
          text: app.i18n.t('links.about'),
          pages: pages,
        },
        sidebarRight: {
          text: app.i18n.t('links.works'),
          pages: pages,
        },
        header: {
          author: true,
          languageSelector: false,
          logo: {},
        },
        footer: {
          social: false,
          label: {
            text: 'scroll'
          }
        }
      })
    },
    created() {
      this.$bus.$on('sidebar:clicked', (params) => {
        if (params.position == 'left') {
          this.$router.push('/about');
        }
        else if (params.position == 'right') {
          this.$router.push('/');
        }
      });

      // this.$bus.$on('scroll:up', (page) => {
      //   this.$store.commit('incrementLayoutPage', page);
      // });
      //
      // this.$bus.$on('scroll:down', (page) => {
      //   this.$store.commit('decrementLayoutPage', page);
      // });
    },
    computed: {
      totalPages() {
        return 3;
      }
    },
    methods: {
      work(row, column) {
        let key = ((row+1)*this.cardsPerRow) + column + 1;
        return this.works[key];
      }
    },
    components: {
      WorkCard
    }
  }
</script>

<style scoped>
  /* Mobile First Media Queries *//* Mobil

  /* Base style */
  .content {
    margin: 0 auto;
    width: 70%;
  }

  .grid {
    display: grid;
    grid-template-rows: 220px 220px;
    grid-auto-flow: column;
    grid-gap: 40px;
  }

  /* Larger than mobile screen */
  @media (min-width: 40.0rem) { }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) { }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) { }

</style>
