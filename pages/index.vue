<template>
  <div ref="content" class="content" :style="cssProps">
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
  import WorksRef from '~/components/WorksRef.vue';
  import images from '~/assets/js/images.js';

  export default {
    fetch ({ store, app }) {
      let images = images.get();
      let pages = images.length;

      store.commit('layout', {
        general: {
          color: 'white',
          page: 1
        },
        background: {
          images: images,
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
          languageSelector: true,
          logo: {},
        },
        footer: {
          social: true,
        }
      });
    },
    created() {
      this.$bus.$on('background:change', (page) => {
        this.$store.commit('setLayoutPage', page);
      });

      this.$bus.$on('sidebar:clicked', (params) => {
        if (params.position == 'left') {
          this.$router.push('/about');
        }
        else if (params.position == 'right') {
          this.$router.push('/works');
        }
      });
    },
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
  .content {
    margin: 0 auto;
    margin-top: 10vh;
    width: 70%;
  }

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

    .content {
      margin-top: 15vh;
      width: 60%;
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
