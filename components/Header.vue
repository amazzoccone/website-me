<template>
  <div>
    <logo></logo>
    <author></author>
    <page-label v-if="showLabel" position="top" :text="labelText"></page-label>
    <language-selector></language-selector>
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
      return _.get(this.params, 'label.show', false);
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
