<template>
  <div class="back">
    <div class="background"></div>
    <div v-for="(image, key) in images" :key="key"
      :class="classObj(key)"
      :style="styleObj(image)"
    ></div>
  </div>
</template>

<script>
  export default {
    props: {
      images: {
        type: Array,
        default: () => { return []; }
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
      if (this.images.length > 0) {
        setInterval(() => {
          if (this.activeImage < this.images.length-1) {
            this.activeImage++;
          }
          else {
            this.activeImage = 0;
          }

          this.$bus.$emit('background:change', this.activeImage + 1);
        }, this.duration);
      }
    },
    methods: {
      styleObj(image) {
        return {
          background: `url(${image}) no-repeat center center fixed`
        };
      },
      classObj(key) {
        return {
          'background image': true,
          'hidden': this.activeImage !== key
        };
      },
    }
  }
</script>

<style scoped>
  @import '~/assets/css/variables.css';
  
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
    background-color: var(--background-color);
  }
  .image {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
