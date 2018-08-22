export default {
  find(name) {
    return `/works/${name}-xl.jpg`
  },
  get() {
    return [
      this.find('miedo'),
      this.find('risas'),
      this.find('asfixia')
    ]
  }
}
