<template>
  <scroll-detector :disable="isMobile" @scroll:up="scrollUpHandler" @scroll:down="scrollDownHandler">
    <img v-if="work" :src="work.image" />
  </scroll-detector>
</template>

<script>
  import ScrollDetector from '~/components/internal/ScrollDetector.vue';
  import works from '~/assets/js/works.js';

  export default {
    data() {
      return {
        isMobile: false
      }
    },
    computed: {
      pages() {
        return this.data ? this.data.length : 0;
      },
      page() {
        return this.$store.state.layout.general.page;
      },
      data() {
        return this.$store.state.works;
      },
      work() {
        let id = this.$route.params.id;

        return this.data.find(work => work.id == id) || {};
      },
      styleObj() {
        return {
          'background-image': this.work ? `url(${this.work.image})` : '',
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-size': 'cover',
        };
      },
    },
    mounted() {
      this.$store.commit('works', works.get(this.$t));
      this.isMobile = window.outerWidth < 640;
    },
    watch:{
      data(newVal, oldVal) {
        this.loaded();
      },
    },
    methods: {
      loaded() {
        this.$bus.$emit('work-info:loaded', {
          data: this.data,
          pages: this.pages,
          page: this.page,
          work: this.work
        });
      },
      scrollUpHandler(speed) {
        if (this.page < this.pages) {
            this.$store.commit('setLayoutPage', this.page + 1);
        }
      },
      scrollDownHandler(speed) {
        if (this.page > 1) {
            this.$store.commit('setLayoutPage', this.page - 1);
        }
      }
    },
    components: {
      ScrollDetector
    }
  }
</script>

<style scoped>
  @import '~/assets/css/variables.css';

  /* Mobile First Media Queries */

  /* Base style */
  img {
    width: 90%;
  }

  /* Larger than mobile screen */
  @media (min-width: 40.0rem) { }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) { }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) { }
</style>
