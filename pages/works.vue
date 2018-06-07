<template>
  <div class="content">
    <!-- <div class="row">
      <work-card></work-card>
      <work-card></work-card>
      <work-card></work-card>
    </div>
    <div class="row">
      <work-card></work-card>
      <work-card></work-card>
      <work-card></work-card>
    </div> -->
  </div>
</template>

<script>

export default {
  fetch ({ store, app }) {
    //TODO: ADD WORKS DATA
    let images = ['/IMG_0546.JPG', 'IMG_0529.JPG', 'IMG_0529.JPG'];
    let pages = images.length;

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
        text: 'x',  //&#10006;,
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
}
</script>

<style scoped>
  /* Mobile First Media Queries *//* Mobil

  /* Base style */
  .content {
    margin: 0 auto;
    width: 60%;
  }

  /* Larger than mobile screen */
  @media (min-width: 40.0rem) { }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) { }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) { }

</style>
