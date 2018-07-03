<template>
  <div id="scroll-detector">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      settings: {
        type: Object,
        default: () => { return {}; }
      }
    },
    computed: {
      tolerance() {
        return this.settings.tolerance || 1;
      },
      timeout() {
        return this.settings.tolerance || 40;
      },
      element() {
        return document.getElementById("scroll-detector");
      }
    },
    mounted() {
      // IE9, Chrome, Safari, Opera
    	this.element.addEventListener("mousewheel", this.debouncer(e => {
          this.handleScroll(e);
      }));
    	// Firefox
    	this.element.addEventListener("DOMMouseScroll", this.debouncer(e => {
          this.handleScroll(e);
      }));
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll(e) {
        //Call your scroll handler here.
        let speed = e.deltaY;

        if (speed >= this.tolerance) {
          this.$emit('scroll:up', speed);
        }
        else if (speed <= -this.tolerance) {
          this.$emit('scroll:down', speed);
        }
      },
      //Debouncer functions add a delay between an event and a reaction, so scaling and scrolling don't evoke a function dozens of times.
      debouncer(func, timeout) {
        var timeoutID , timeout = this.timeout;
        return function () {
          var scope = this , args = arguments;
          clearTimeout( timeoutID );
          timeoutID = setTimeout( function () {
            func.apply( scope , Array.prototype.slice.call( args ) );
        } , timeout );
        };
      }
    },
  }
</script>
