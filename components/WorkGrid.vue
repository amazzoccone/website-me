<template>
  <scroll-detector :disable="isMobile" @scroll:up="scrollUpHandler" @scroll:down="scrollDownHandler">
    <div class="grid">
      <!-- <transition-group class="grid" tag="div"
        name="custom-classes-transition"
        enter-active-class="animated fadeInUp slow"> -->
      <work-card v-for="(work, key) in dataForCurrentPage" :key="key"
        :title="work.title"
        :technique="work.technique"
        :dimension="work.dimension"
        :image="work.image_xs"
        :to="link(work)"
      />
    <!-- </transition-group> -->
    </div>
  </scroll-detector>
</template>

<script>
  import ScrollDetector from '~/components/internal/ScrollDetector.vue';
  import WorkCard from '~/components/internal/WorkCard.vue';
  import works from '~/assets/js/works.js';

  export default {
    data() {
      return {
        isMobile: false,
      }
    },
    computed: {
      perPage() {
        return 6;
      },
      total() {
        return this.data ? this.data.length : 0;
      },
      pages() {
        return Math.ceil(this.total / this.perPage);
      },
      page() {
        return this.$store.state.layout.general.page;
      },
      data() {
        return this.$store.state.works;
      },
      dataForCurrentPage() {
        let start = (this.page-1) * this.perPage;
        let end = start + this.perPage;

        return this.data.slice(start, end);
      },
      queryPage() {
        return parseInt(this.$route.query.page || 1);
      }
    },
    mounted() {
      this.$store.commit('works', works.get(this.$t));
      this.isMobile = window.outerWidth < 640;
    },
    watch:{
      data(newVal, oldVal) {
        this.loaded();
      }
    },
    methods: {
      link(work) {
        return `/works/${work.id}`;
      },
      loaded() {
        this.$store.commit('setLayoutPages', this.pages);
      },
      scrollUpHandler(speed) {
        if (this.page < this.pages) {
          this.changePage(this.queryPage+1);
        }
      },
      scrollDownHandler(speed) {
        if (this.page > 1) {
          this.changePage(this.queryPage-1);
        }
      },
      changePage(page) {
        this.$router.push(this.localePath({name: 'works', query: {page: page}}));
      }
    },
    components: {
      WorkCard,
      ScrollDetector
    }
  }
</script>

<style>
  @import '~/assets/css/variables.css';

  /* Mobile First Media Queries */

  /* Base style */
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: var(--work-grid-grap);
    grid-template-rows: repeat(var(--work-grid-rows), var(--work-grid-card-height-xs));
  }

  /* Larger than mobile screen */
  @media (min-width: 40.0rem) { }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) {
    .grid {
      grid-template-columns: repeat( auto-fit, minmax(220px, 1fr) );
      grid-template-rows: repeat(var(--work-grid-rows), var(--work-grid-card-height));
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) { }
</style>
