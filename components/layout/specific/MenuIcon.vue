<template>
  <div :class="classObj" @click="clickHandler">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
  import ConfigMixin from '../ConfigMixin.vue';

  export default {
    mixins: [ConfigMixin],

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
  .hamburger-icon {
    display: inline-block;
    cursor: pointer;
  }
  .hamburger-icon > div {
    width: 17px;
    height: 2px;
    margin: 5px 0;
  }

  /* Colors */
  .hamburger-icon.white > div {
    background-color: #EEE;
  }
  .hamburger-icon.black > div{
    background-color: #111;
  }

</style>
