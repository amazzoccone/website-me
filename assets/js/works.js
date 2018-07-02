export default {
  find(name, app = null) {
    return {
      title: app ? app.i18n.t(`works.${name}.title`) : '-',
      technique: app ? app.i18n.t(`works.${name}.technique`) : '-',
      dimension: app ? app.i18n.t(`works.${name}.dimension`) : '-',
      image: `/${name}.jpg`
    }
  },
  get(app = null) {
    return [
      this.find('dilema', app),
      this.find('asfixia', app),
      this.find('miedo', app),
      this.find('relaciones', app),
      this.find('relaciones', app),
      this.find('relaciones', app)
    ]
  },
  count() {
    return this.get().length;
  }
}
