<template>
  <div class="grid">
    <work-card v-for="(work, key) in data" :key="key"
      :title="work.title"
      :technique="work.technique"
      :dimension="work.dimension"
      :image="work.image"
    />
  </div>
</template>

<script>
  import WorkCard from '~/components/internal/WorkCard.vue';
  import works from '~/assets/js/works.js';

  export default {
    data() {
      return {
        page: 1
      }
    },
    computed: {
      perPage() {
        return 9;
      },
      total() {
        return this.data ? this.data.length : 0;
      },
      pages() {
        return Math.ceil(this.total / this.perPage);
      },
      data() {
        return this.$store.state.works;
      }
    },
    fetch ({ store, app }) {
      let works = works.get(app)
      store.commit('works', works);
    },
    created() {
      this.$bus.$emit('work-grid:loaded', {
        data: this.data,
        pages: this.pages,
        page: this.page,
        perPage: this.perPage,
        total: this.total,
      });
    },
    components: {
      WorkCard
    }
  }
</script>

<style>
  @import '~/assets/css/variables.css';

  /* Mobile First Media Queries */

  /* Base style */
  .grid {
    display: grid;
    grid-template-rows: repeat(2, var(--work-grid-card-height));
    grid-auto-flow: column;
    grid-gap: var(--work-grid-grap);
  }

  /* Larger than mobile screen */
  @media (min-width: 40.0rem) { }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) { }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) { }
</style>