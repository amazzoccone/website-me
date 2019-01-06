export default {
  find(name, translate = null) {
    return {
      title: translate ? translate(`works.${name}.title`) : '-',
      technique: translate ? translate(`works.${name}.technique`) : '-',
      dimension: translate ? translate(`works.${name}.dimension`) : '-',
      image: `/works/${name}-xl.jpg`,
      image_xs: `/works/${name}-xs.jpg`,
      id: name
    }
  },
  get(translate = null) {
    return [
      this.find('anochecer', translate),
      this.find('risas', translate),
      this.find('temple', translate),
      this.find('tormenta', translate),
      this.find('relaciones', translate),
      this.find('dilema', translate),
      this.find('asfixia', translate),
      this.find('miedo', translate)
    ]
  },
  count() {
    return this.get().length;
  },
  next(work) {
    let index = this.findIndexWork(this.work.id);
    return this.data[index+1] || null;
  },
  prev(work) {
    let index = this.findIndexWork(this.work.id);
    return this.data[index-1] || null;
  },
  findIndexWork(id) {
    return this.data.findIndex(work => work.id == id);
  },
}
