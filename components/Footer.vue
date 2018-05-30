<template>
  <div class="footer">
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
      return _.has(this.params, 'label');
    },
    labelText() {
      return _.get(this.params, 'label.text');
    }
  },
  components: {
    PageLabel,
    SocialLinks,
  }
}
</script>

<style scoped>
  .footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
  }
</style>
