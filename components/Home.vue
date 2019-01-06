<template>
  <div :style="cssProps">
    <div class="row">
      <div class="works works-desktop">
        <works-ref key="wr-top" :page="page"/>
      </div>
    </div>
    <div class="row">
      <h1 class="title">{{ $t('home.title') }}</h1>
    </div>
    <div class="row">
      <div class="works works-mobile">
        <works-ref key="wr-botton" :page="page"/>
      </div>
    </div>
  </div>
</template>

<script>
  import WorksRef from '~/components/internal/WorksRef.vue';
  import layoutConfig from '~/assets/js/config/layout/works.js';

  export default {
    computed: {
      page() {
        return this.$store.state.layout.general.page;
      },
      cssProps() {
        return {
          color: 'var(--color)'
        }
      }
    },
    components: {
      WorksRef
    }
  }
</script>

<style scoped>
  .title {
    font-size: 3.5rem;
    text-align: center;
    letter-spacing: 1px;
  }

  .works {
    margin-left: 55%;
  }
  .works-desktop {
    display: none;
  }

  /* Larger than mobile screen */
  @media (min-width: 40.0rem) {
    .title {
      font-size: 4rem;
    }
    .works-desktop {
      display: block;
    }
    .works-mobile {
      display: none;
    }
  }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) { }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) {
    .title {
      font-size: 5rem;
    }
  }

</style>
