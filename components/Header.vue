<template>
  <div>
    <!-- <logo></logo>
    <author></author>
    <page-label></page-label>
    <language-selector></language-selector> -->
  </div>
</template>

<script>
// import Author from '~/components/Author.vue'
// import LanguageSelector from '~/components/LanguageSelector.vue'
// import Logo from '~/components/Logo.vue'

export default {
  props: {
    params: {
      type: Object,
      default: () => {
        return {};
      }
    },
  },
  // components: {
  //   Author,
  //   LanguageSelector,
  //   Logo,
  // }
}
</script>
