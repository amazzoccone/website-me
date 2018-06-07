<template>
  <div class="wrapper">
    <div class="box">
      <div class="row">
        <div v-if="isTop" class="center" :style="style"></div>
      </div>
      <div class="row">
        <span class="text center">{{ text }}</span>
      </div>
      <div class="row">
        <div v-if="isBottom" class="center" :style="style"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import ConfigMixin from '../ConfigMixin.vue';

  export default {
    mixins: [ConfigMixin],

    props: {
      position: {
        type: String,
        required: true,
        validator: (value) => {
          return ['bottom', 'top'].indexOf(value) !== -1
        }
      },
      text: {
        type: String,
        required: true
      },
    },
    computed: {
      isBottom() {
        return this.position == 'bottom';
      },
      isTop() {
        return this.position == 'top';
      },
      style() {
        return {
          'border-left': '2px solid ' + this.color,
          height: '100px',
          width: '5px'
        }
      }
    }
  }
</script>

<style scoped>
  /* Mobile First Media Queries */

  /* Base style */
  .wrapper {
    position:relative;
    text-align:center;
  }
  .center {
    margin: 0px auto;
  }
  .text {
    font-size: 1rem;
  }

  .box {
    left: 0px;
    width: 100%;
    position:absolute;
  }

  /* Larger than mobile screen */
  @media (min-width: 40.0rem) { }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) { }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) { }
</style>
