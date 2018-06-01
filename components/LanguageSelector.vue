<template>
  <div>
    <nuxt-link v-for="locale in locales" :key="locale.code"
      :to="switchLocalePath(locale.code)"
      :class="['button button-clear circular', locale.code === active ? 'active' : '']">
      {{ locale.code }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
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
    color: #FFF;
    font-size: 0.6em;
    font-weight: 300;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
  .button:hover {
    color: #FFF;
    font-weight: bold;
  }
  .button.circular {
    height: 45px;
    width: 45px;
    line-height: 2.7;
    padding: 0px;
    border-radius: 50%;
  }
  .button.active {
    background-color: rgba(255,255,255, 0.3);
  }
  .button.button-clear:focus {
    color: #FFF;
  }

</style>
