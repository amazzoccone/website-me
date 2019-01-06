export default {
  get(app) {
    return {
      general: {
        color: '#666',
        page: 1
      },
      background: {
        color: '#eee'
      },
      sidebarLeft: {},
      sidebarRight: {
        top: {
          text: '&times;',
          size: 'lg'
        }
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
