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
  export default {
    methods: {
      classObj(locale) {
        return {
          'button button-clear circular': true,
          'active': locale.code === this.active,
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
  @import '~/assets/css/variables.css';

  :root {
      --button-size: 45px;
      --button-active-opacity: 0.2;
  }

  .button {
    margin: 0px;
    font-size: 0.6em;
    font-weight: 300;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  }
  .button:hover {
    font-weight: bold;
  }
  .button.circular {
    height: var(--button-size);
    width: var(--button-size);
    line-height: 2.7;
    padding: 0px;
    border-radius: 50%;
  }

  /* Color White */
  .button, .button:hover, .button.button-clear:focus {
    color: #FFF;
    color: color(var(--color));
  }
  .button.active {
    background-color: color(var(--color) a(var(--button-active-opacity)));
  }

</style>
