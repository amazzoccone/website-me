<template>
  <div class="back">
    <div class="background" :style="cssProps"></div>
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
          activeImage: 0,
          interval: null
      }
    },
    mounted() {
      if (this.countOfImages > 0) {
        this.setInterval();
      }
    },
    methods: {
      styleObj(image) {
        return {
          'background-image': `url(${image})`,
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-size': 'cover',
        };
      },
      classObj(key) {
        let active = this.activeImage === key;
        return {
          'background image': true,
          'animated fadeIn slower': active,
          'animated fadeOut slower': !active
        };
      },
      setInterval() {
        this.interval = setInterval(() => {
          if (this.activeImage < this.countOfImages - 1) {
            this.activeImage++;
          }
          else {
            this.activeImage = 0;
          }

          this.$bus.$emit('background:change', this.activeImage + 1);
        }, this.duration);
      },
      clearInterval() {
        clearInterval(this.interval);
        this.interval = null;
      }
    },
    computed: {
      countOfImages() {
        return this.images.length;
      },
      cssProps() {
        return {
          "background-color": 'var(--background-color)'
        }
      }
    },
    watch: {
      countOfImages(newVal, oldVal) {
        if (newVal == 0) {
          this.clearInterval()
        }
        else if (newVal > 0) {
          this.setInterval();
        }

        return newVal;
      }
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
  }
  .image {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
