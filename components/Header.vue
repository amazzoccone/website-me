<template>
  <div class="clearfix wrapper">
    <logo :color="color" class="float-left header-space"/>
    <author class="author float-left header-space"/>

    <page-label v-if="showLabel" position="top" :text="labelText"/>

    <language-selector class="float-right header-space"/>
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
    },
    color() {
      return _.get(this.params, 'color');
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
  .wrapper {
    padding: 20px 10px;
  }
  .author {
      margin-left: 30px;
  }

  /* Larger than mobile screen */
  @media (min-width: 40.0rem) { }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) {
    .wrapper {
      padding: 50px 30px;
    }
  }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) {}
</style>
