<template>
  <div v-for="n in count" :key="n" :class="borderClass(n, 'left')" :style="borderStyle"></div>
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
          height: 100/this.params.pages + 'vh'
        }
      },
    },
    methods: {
      borderClass(n, position) {
        return {
          ['row border border-'+position]: true,
          [this.color]: true,
          active: n === this.params.page
        }
      },
    }
  }
</script>

<style>
  .border {
    margin: 0;
    width: 100%;
  }
  .border-left {
    border-left: 2px solid #000;
  }
  .border-right {
    border-right: 2px solid #000;
  }

  /* Color White */
  .border.white {
    border-color: rgba(255, 255, 255, 0.4);
  }
  .border.white.active {
    border-color: rgba(255, 255, 255, 0.8);
  }
  /* Color Black */
  .border.black {
    border-color: rgba(0, 0, 0, 0.4);
  }
  .border.black.active {
    border-color: rgba(0, 0, 0, 0.8);
  }
</style>
