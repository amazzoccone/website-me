<template>
  <div>
    <nuxt-link v-for="locale in locales" :key="locale.code"
      :to="switchLocalePath(locale.code)"
      :class="classObj(locale)">
      {{ locale.code }}
    </nuxt-link>
  </div>
</template>

<script>
  import ConfigMixin from '../ConfigMixin.vue';

  export default {
    mixins: [ConfigMixin],

    methods: {
      classObj(locale) {
        return {
          'button button-clear circular': true,
          'active': locale.code === this.active,
          [this.color]: true
        };
      },
    },
    computed: {
      locales() {
        return this.$i18n.locales;
      },
      active() {
        return this.$i18n.locale;
      }
    }
  }
</script>

<style scoped>
  .button {
    margin: 0px;
    font-size: 0.6em;
    font-weight: 300;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
  .button:hover {
    font-weight: bold;
  }
  .button.circular {
    height: 45px;
    width: 45px;
    line-height: 2.7;
    padding: 0px;
    border-radius: 50%;
  }

  /* Color White */
  .button.white, .button.white:hover, .button.white.button-clear:focus {
    color: #FFF;
  }
  .button.white.active {
    background-color: rgba(255,255,255, 0.2);
  }
  /* Color Black */
  .button.black, .button.black:hover, .button.black.button-clear:focus {
    color: #111;
  }
  .button.black.active {
    background-color: rgba(0,0,0, 0.2);
  }

</style>
