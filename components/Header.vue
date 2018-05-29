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
        return {
          author: true,
          label: false,
          languageSelector: true,
          logo: true,
          show: true,
        }
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
