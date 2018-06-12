<template>
  <div class="clearfix wrapper">
    <logo class="float-left header-space"/>
    <author class="author float-left header-space"/>

    <page-label v-if="showLabel" position="top" :text="labelText"/>

    <language-selector v-if="showLocaleSelector" class="float-right header-space locale-selector"/>
    <div class="float-right menu-icon">
      <menu-icon/>
    </div>
  </div>
</template>

<script>
  import Author from './specific/Author.vue'
  import LanguageSelector from './specific/LanguageSelector.vue'
  import Logo from './specific/Logo.vue'
  import MenuIcon from './specific/MenuIcon.vue'
  import PageLabel from './specific/PageLabel.vue'

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
      showLocaleSelector() {
        return _.get(this.params, 'languageSelector', false);
      },
      labelText() {
        return _.get(this.params, 'label.text');
      },
    },
    components: {
      Author,
      LanguageSelector,
      Logo,
      MenuIcon,
      PageLabel
    }
  }
</script>

<style scoped>
  /* Mobile First Media Queries */

  /* Base style */
  .wrapper {
    padding: 30px 30px;
  }
  .author {
      margin-left: 15px;
  }
  .locale-selector {
    display: none !important;
  }

  /* Larger than mobile screen */
  @media (min-width: 40.0rem) { }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) {
    .wrapper {
      padding: 50px 30px;
    }

    .locale-selector {
      display: block !important;
    }
    .menu-icon {
      display: none !important;
    }
  }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) {}
</style>
