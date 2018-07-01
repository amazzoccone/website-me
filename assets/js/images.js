export default {
  find(name) {
    return `/${name}.jpg`
  },
  get() {
    return [
      this.find('miedo'),
      this.find('relaciones'),
      this.find('asfixia')
    ]
  }
}
