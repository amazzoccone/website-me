<template>
  <div>
    <!--TODO: Add title and work number reference-->
  </div>
</template>

<script>

export default {
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
