<template>
  <div class="row">
    <div class="column pointer" @click="pageClicked">
      <div v-if="isTop" class="row">
        <div class="center line"></div>
      </div>
      <div class="row">
        <span class="text center">{{ text }}</span>
      </div>
      <div v-if="isBottom" class="row">
        <div class="center line border-color"></div>
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
    },
    methods: {
      pageClicked(e) {
        let type = this.isTop ? 'top' : 'bottom';
        this.$bus.$emit('page-label:'+type);
      },
    }
  }
</script>

<style scoped>
  @import '~/assets/css/variables.css';

  .wrapper {
    position:relative;
    text-align:center;
  }
  .center {
    margin: 0px auto;
  }
  .text {
    font-size: 0.95rem;
    margin: 2px auto;
  }

  .line {
    height: var(--page-label-height);
    width: var(--page-label-line-width);
    border-width: calc(var(--page-label-line-width)/2);
    border-style: solid;
  }
</style>
