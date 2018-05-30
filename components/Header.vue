<template>
  <div class="header clearfix">
    <logo class="float-left"/>
    <author class="float-left"/>

    <page-label v-if="showLabel" position="top" :text="labelText"/>

    <language-selector class="float-right"/>
  </div>
</template>

<script>
import Author from '~/components/Author.vue'
import LanguageSelector from '~/components/LanguageSelector.vue'
import Logo from '~/components/Logo.vue'
import PageLabel from '~/components/PageLabel.vue'

export default {
  props: {
    params: {
      type: Object,
      default: () => {
        return {};
      }
    },
  },
  computed: {
    showLabel() {
      return _.has(this.params, 'label');
    },
    labelText() {
      return _.get(this.params, 'label.text');
    }
  },
  components: {
    Author,
    LanguageSelector,
    Logo,
    PageLabel
  }
}
</script>

<style scoped>
  /* Mobile First Media Queries */

  /* Base style */
  .header {
    margin-top: 2vh;
  }

  /* Larger than mobile screen */
  @media (min-width: 40.0rem) { }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) {
    .header {
      margin-top: 8vh;
    }
  }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) {}
</style>
