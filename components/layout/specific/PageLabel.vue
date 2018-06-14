<template>
  <div class="wrapper">
    <div class="box">
      <div class="row">
        <div v-if="isTop" class="center line"></div>
      </div>
      <div class="row">
        <span class="text center">{{ text }}</span>
      </div>
      <div class="row">
        <div v-if="isBottom" class="center line border-color"></div>
      </div>
    </div>
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
      },
    },
    computed: {
      isBottom() {
        return this.position == 'bottom';
      },
      isTop() {
        return this.position == 'top';
      },
    }
  }
</script>

<style scoped>
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

  .line {
    height: var(--page-label-height);
    width: 5px;
    border-width: 2px;
    border-style: solid;
  }
</style>
