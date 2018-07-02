import images from '~/assets/js/images.js';

export default {
  get(app) {
    let backgroundImages = images.get();
    let pages = backgroundImages.length;

    return {
      general: {
        color: 'white',
        page: 1
      },
      background: {
        images: backgroundImages,
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
    }
  },
}
