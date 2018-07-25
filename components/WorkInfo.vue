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
        return this.findIndexWork(this.$route.params.id) + 1;
      },
      data() {
        return this.$store.state.works;
      },
      work() {
        return this.findWork(this.$route.params.id);
      },
      prevWork() {
        let index = this.findIndexWork(this.work.id);
        return this.data[index-1] || null;
      },
      nextWork() {
        let index = this.findIndexWork(this.work.id);
        return this.data[index+1] || null;
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

            this.$router.push(this.localePath({name: 'works-id', params: {id: this.nextWork.id}}));
        }
      },
      scrollDownHandler(speed) {
        if (this.page > 1) {
            this.$store.commit('setLayoutPage', this.page - 1);
            this.$router.push(this.localePath({name: 'works-id', params: {id: this.prevWork.id}}));
        }
      },
      findWork(id) {
        return this.data.find(work => work.id == id) || {};
      },
      findIndexWork(id) {
        return this.data.findIndex(work => work.id == id);
      },
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
  @media (min-width: 80.0rem) {
    img {
      width: auto;
      height: 70vh;
    }
  }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) { }
</style>
