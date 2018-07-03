<template>
  <div class="footer">
    <div class="row">
      <div class="column column-10 column-offset-45">
        <page-label v-if="showLabel" position="bottom" :text="labelText" class="float-left social"/>
      </div>

      <div v-if="params.social" class="column column-45" style="display: flex;">
        <social-links class="bottom"/>
      </div>
    </div>
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

  .bottom {
    align-self: flex-end;
  }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) {
    .social {
      display: block !important;
    }
  }
</style>
