<template>
  <div class="footer" :style="{width: width, left: left}">
    <page-label v-if="showLabel" position="bottom" :text="labelText" :color="params.color"/>
    <social-links v-if="params.social" class="float-right social"/>
  </div>
</template>

<script>
  import PageLabel from './specific/PageLabel.vue'
  import SocialLinks from './specific/SocialLinks.vue'

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
  /* Mobile First Media Queries */

  /* Base style */
  .footer {
    position: fixed;
    bottom: 0;
    text-align: center;
  }

  .social {
    display: none !important;
  }

  /* Larger than mobile screen */
  @media (min-width: 40.0rem) { }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) {
    .social {
      display: block !important;
    }
  }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) { }
</style>
