<template>
  <div class="footer" :style="{width: width, left: left}">
    <page-label v-if="showLabel" position="bottom" :text="labelText" :color="params.color"/>
    <social-links v-if="params.social" class="float-right"/>
  </div>
</template>

<script>
import PageLabel from '~/components/PageLabel.vue'
import SocialLinks from '~/components/SocialLinks.vue'

export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
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
    left() {
      return (100 - this.width.slice(0, -1));
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
      bottom: 0;
      text-align: center;
  }
</style>
