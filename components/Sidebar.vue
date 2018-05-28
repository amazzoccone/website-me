<template>
  <div class="column column-10 sidebar">
    <span v-if="!closeBtn" :class="['title', 'rotate'+ rotate]">{{ text }}</span>
    <span v-if="closeBtn" class="close-btn" @click="close">x</span>
  </div>
</template>

<script>
export default {
  props: {
    rotate: {
      type: String,
      required: true
    },
    text: {
      type: String,
    },
    closeBtn: {
      type: Boolean,
      default: false
    },
    borderCount: {
      type: Number,
      default: 1
    },
    borderBold: {
      type: Number,
    },
  },
  methods: {
    close() {
      this.$emit('sidebar-close-clicked');
    }
  },
}
</script>

<style scoped>
  .sidebar {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }

  .title {
    white-space:nowrap;
    display:block;
    position: absolute;
    top: 50%;
  }
  .rotate90 {
    -webkit-transform:rotate(90deg);
    -moz-transform:rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform:rotate(90deg);
    transform: rotate(90deg);
  }
  .rotate-90 {
    -webkit-transform:rotate(-90deg);
    -moz-transform:rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform:rotate(-90deg);
    transform: rotate(-90deg);
  }
  .close-btn {

  }
</style>
