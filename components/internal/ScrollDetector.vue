<template>
  <div ref="scroll-content">
  </div>
</template>

<script>
  export default {
    props: {
      return {
        settings: {
          type: Object,
          default: {}
        }
      }
    }
    mounted() {
      this.getElement().addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll(e) {
        let speed = scrollSpeed();
        console.log(speed);

        if (speed > this.tolerance) {
          //TODO: Emit down event
        }
        if (speed < -this.tolerance) {
          //TODO: Emit up event
        }
      }
      scrollSpeed() {
        var lastPos, newPos, timer, delta,
            delay = this.settings.delay || 50; // in "ms" (higher means lower fidelity )

        function clear() {
          lastPos = null;
          delta = 0;
        }
        clear();

        return function() {
          newPos = this.getElement().scrollY;
          if ( lastPos != null ){ // && newPos < maxScroll
            delta = newPos -  lastPos;
          }
          lastPos = newPos;
          clearTimeout(timer);
          timer = setTimeout(clear, delay);
          return delta;
        };
      }
      getElement() {
        return this.$refs['scroll-content'];
      }
    }
  }
</script>
