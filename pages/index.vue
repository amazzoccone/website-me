<template>
  <div class="content">
    <div class="row">
      <div class="works-desktop">
        <span class="works-ref">
          <b>{{ '/0' + page }}</b>
        </span>
        <span class="works-ref">
          {{ $t('home.works') }}
        </span>
      </div>
    </div>
    <div class="row">
      <h1 class="title">{{ $t('home.title') }}</h1>
    </div>
    <div class="row">
      <div class="works-mobile float-right">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      page: 1
    }
  },
  fetch ({ store, app }) {
    let images = ['/IMG_0546.JPG', 'IMG_0529.JPG', 'IMG_0529.JPG'];
    let pages = images.length;

    store.commit('layout', {
      color: '#FFF',
      images: images,
      sidebarLeft: {
        text: app.i18n.t('links.about'),
        pages: pages,
        page: 1
      },
      sidebarRight: {
        text: app.i18n.t('links.works'),
        pages: pages,
        page: 1
      },
      header: {
        author: true,
        languageSelector: true,
        logo: {},
      },
      footer: {
        social: true
      }
    })
  }
}
</script>

<style scoped>
  /* Mobile First Media Queries *//* Mobil

  /* Base style */
  .content {
    margin: 0 auto;
    width: 60%;
  }

  .works-ref {
    font-size: 1.2rem;
    float: right;
    line-height: 1.2;
  }

  .title {
    font-size: 5rem;
    text-align: center;
  }
  .works-desktop {
    width: 80%;
    display: none;
  }

  /* Larger than mobile screen */
  @media (min-width: 40.0rem) {
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
  @media (min-width: 120.0rem) { }

</style>
