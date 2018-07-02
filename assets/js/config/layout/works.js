export default {
  get(app) {
    return {
      general: {
        color: 'black',
        page: 1
      },
      background: {
        color: 'white'
      },
      sidebarLeft: {
        text: app.i18n.t('links.about'),
        pages: 1,
      },
      sidebarRight: {
        text: app.i18n.t('links.works'),
        pages: 1,
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
    }
  },
}
