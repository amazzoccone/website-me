export default {
  get(app) {
    return {
      general: {
        color: '#555',
        page: 1
      },
      background: {
        color: '#eee'
      },
      sidebarLeft: {
        text: app.i18n.t('links.about'),
      },
      sidebarRight: {
        text: app.i18n.t('links.works'),
      },
      header: {
        author: false,
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
