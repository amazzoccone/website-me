export default {
  find(name, app) {
    return {
      title: app.$t(`works.${name}.title`),
      technique: app.$t(`works.${name}.technique`),
      dimension: app.$t(`works.${name}.dimension`),
      image: `/${name}.jpg`
    }
  },
  get(app) {
    return [
      this.find('dilema', app),
      this.find('asfixia', app),
      this.find('miedo', app),
      this.find('relaciones', app),
      this.find('relaciones', app),
      this.find('relaciones', app)
    ]
  }
}
