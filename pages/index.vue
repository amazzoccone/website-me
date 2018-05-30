<template>
  <div>
    <!--TODO: Add title and work number reference-->
  </div>
</template>

<script>

export default {
  fetch ({ store, app }) {
    store.commit('layout', {
      images: ['/IMG_0546.JPG', 'IMG_0529.JPG'],
      sidebarLeft: {
        text: app.i18n.t('links.about')
      },
      sidebarRight: {
        text: app.i18n.t('links.works')
      },
      header: {
        author: true,
        languageSelector: true,
        logo: true,
      },
      footer: {
        label: {
          text: 'scroll'
        },
        social: true
      }
    })
  }
}
</script>
