export default {
  find(name) {
    return `/${name}.jpg`
  },
  get() {
    return [
      find('miedo'),
      find('relaciones'),
      find('asfixia')
    ]
  }
}
