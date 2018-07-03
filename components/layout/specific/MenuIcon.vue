<template>
  <div class="hamburger-icon" @click="clickHandler">
    <div :style="styleObj"></div>
    <div :style="styleObj"></div>
    <div :style="styleObj"></div>
  </div>
</template>

<script>
  export default {
    computed: {
      styleObj() {
        return {
          'background-color': 'var(--color)'
        };
      }
    },
    methods: {
      clickHandler() {
        //TODO: Complete
      }
    }
  }
</script>

<style scoped>
  @import '~/assets/css/variables.css';

  .hamburger-icon {
    display: inline-block;
    cursor: pointer;
  }
  .hamburger-icon > div {
    width: 17px;
    height: 2px;
    margin: 5px 0;
  }
</style>
