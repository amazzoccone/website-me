<template>
  <div class="footer">
    <page-label v-if="showLabel" position="bottom" :text="labelText"/>
    <social-links v-if="params.social" class="float-right social"/>
  </div>
</template>

<script>
  import PageLabel from './specific/PageLabel.vue'
  import SocialLinks from './specific/SocialLinks.vue'

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
    },
    components: {
      PageLabel,
      SocialLinks,
    }
  }
</script>

<style scoped>
  @import '~/assets/css/variables.css';

  /* Mobile First Media Queries */

  /* Base style */
  .footer {
    position: fixed;
    bottom: 0;
    text-align: center;
    left: var(--layout-footer-left);
    width: var(--layout-footer-width);
  }

  .social {
    display: none !important;
  }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) {
    .social {
      display: block !important;
    }
  }
</style>
