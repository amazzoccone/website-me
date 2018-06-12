<template>
  <div :class="classObj" @click="clickHandler">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
  export default {
    computed: {
      classObj() {
        return {
          'hamburger-icon': true,
          [this.color]: true
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

  .hamburger-icon > div {
    background-color: var(--color);
  }

</style>
