<template>
  <div>
    <div v-for="n in count" :key="n" :class="borderClass(n, 'left')" :style="borderStyle"></div>
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
    computed: {
      borderStyle() {
        return {
          height: 100/this.count + 'vh'
        }
      },
    },
    methods: {
      borderClass(n, position) {
        return {
          ['border border-'+position]: true,
          active: n === this.active
        }
      },
    }
  }
</script>

<style>
  @import '~/assets/css/variables.css';

  .border-left {
    border-left: var(--border-default-width) solid;
  }
  .border-right {
    border-right: var(--border-default-width) solid;
  }
  .border {
    margin: 0;
    width: 100%;
    border-color: color(var(--color) a(var(--border-default-opacity)));
  }

  .border-left.active {
    border-left: var(--border-active-width) solid;
  }
  .border-right.active {
    border-right: var(--border-active-width) solid;
  }

  .border.active {
    border-color: color(white a(var(--border-active-opacity)));
  }
</style>
