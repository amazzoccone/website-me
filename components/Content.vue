<template>
  <div class="column column-80 content">
    <header-content :params="header"></header-content>
    <slot></slot>
    <footer-content :params="footer"></footer-content>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

export default {
  props: {
    header: {
      type: Object,
    },
    footer: {
      type: Object,
    }
  },
  components: {
    'footer-content': Footer,
    'header-content': Header
  }
}
</script>
