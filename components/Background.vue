<template>
  <div class="back">
    <div class="background" :style="{'background-color': color}"></div>
    <div v-for="(image, key) in images" :key="key"
      :class="['background image', activeImage === key ? '' : 'hidden']"
      :style="{background: 'url('+image+') no-repeat center center fixed'}"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#FFF'
    },
    images: {
      type: Array,
    },
    duration: {
      type: Number,
      default: 3000 //in ms
    },
  },
  data() {
    return {
        activeImage: 0
    }
  },
  mounted() {
    setInterval(() => {
      if (this.activeImage < this.images.length-1) {
        this.activeImage++;
      }
      else {
        this.activeImage = 0;
      }

      this.$bus.$emit('background:change', this.activeImage+1);
    }, this.duration);
  },
}
</script>

<style scoped>
  .hidden {
    display: none;
  }

  .back {
    z-index: -1;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    background: lime; /* Just to visualize the extent */
  }
  .image {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
