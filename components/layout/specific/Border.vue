<template>
  <div class="full-height column">
    <div v-for="n in count" :key="n">
      <div :class="borderClass(n)" :style="cssProps(n)"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      active: {
        type: Number,
        default: null,
      },
      count: {
        type: Number,
        default: 1
      }
    },
    methods: {
      borderClass(n) {
        return {
          ['border']: true,
          active: n === this.active
        }
      },
      cssProps(n) {
        return {
          height: 100/this.count + 'vh',
          'background-color': 'var(--color)'
        };
      }
    }
  }
</script>

<style scoped>
  @import '~/assets/css/variables.css';

  .column {
      padding: 0;
      width: auto;
  }

  .border {
    margin: 0 auto;
    width: var(--border-default-width);
    opacity: var(--border-default-opacity);
  }
  .border.active {
    width: var(--border-active-width);
    opacity: var(--border-active-opacity);
  }
</style>
