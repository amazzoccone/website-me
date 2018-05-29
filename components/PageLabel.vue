<template>
  <div>
    <div v-if="isTop" class="vertical-line"></div>
    <span>{{ text }}</span>
    <div v-if="isBottom" class="vertical-line"></div>
  </div>
</template>

<script>
export default {
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
    }
  },
  computed: {
    isBottom() {
      return this.position == 'bottom';
    },
    isTop() {
      return this.position == 'top';
    }
  }
}
</script>

<style scoped>
  .vertical-line {
    border-left: 2px solid #333;
  }
</style>
