export default {
  get(app) {
    return {
      general: {
        color: '#666',
        page: 1
      },
      background: {
        color: 'white'
      },
      sidebarLeft: {
        text: app.i18n.t('links.about'),
      },
      sidebarRight: {
        text: '&times;',
        size: 'lg'
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
