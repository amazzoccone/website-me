export default {
  find(name, translate = null) {
    return {
      title: translate ? translate(`works.${name}.title`) : '-',
      technique: translate ? translate(`works.${name}.technique`) : '-',
      dimension: translate ? translate(`works.${name}.dimension`) : '-',
      image: `/${name}.jpg`
    }
  },
  get(translate = null) {
    return [
      this.find('dilema', translate),
      this.find('asfixia', translate),
      this.find('miedo', translate),
      this.find('relaciones', translate),
      this.find('relaciones', translate),
      this.find('relaciones', translate)
    ]
  },
  count() {
    return this.get().length;
  }
}
