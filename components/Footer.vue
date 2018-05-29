<template>
  <div>
    <page-label v-if="showLabel" position="bottom" :text="labelText"></page-label>
    <social-links v-if="params.social"></social-links>
  </div>
</template>

<script>
import PageLabel from '~/components/PageLabel.vue'
import SocialLinks from '~/components/SocialLinks.vue'

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
      _.get(this.params, 'label.info', false);
    },
    labelText() {
      _.get(this.params, 'label.text');
    }
  }
  components: {
    PageLabel,
    SocialLinks,
  }
}
</script>
