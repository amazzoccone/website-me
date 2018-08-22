<template>
  <div id="scroll-detector">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        handleScroll: {}
      }
    },
    props: {
      settings: {
        type: Object,
        default: () => { return {}; }
      },
      disable: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      tolerance() {
        return this.settings.tolerance || 5;
      },
      timeout() {
        return this.settings.timeout || 10;
      },
      element() {
        return document.getElementById("scroll-detector");
      }
    },
    mounted() {
      this.createListener();
    },
    beforeDestroy() {
      this.deleteListener();
    },
    methods: {
      createListener() {
        this.handleScroll = this.debouncer(e => {
          this.checkSpeed(e);
        });;

        this.element.addEventListener("mousewheel", this.handleScroll);       // IE9, Chrome, Safari, Opera
        this.element.addEventListener("DOMMouseScroll", this.handleScroll);   // Firefox
      },
      deleteListener() {
        this.element.removeEventListener('mousewheel', this.handleScroll);
        this.element.removeEventListener('DOMMouseScroll', this.handleScroll);
        this.handleScroll = null;
      },
      //Debouncer functions add a delay between an event and a reaction, so scaling and scrolling don't evoke a function dozens of times.
      debouncer(func, timeout) {
        var timeoutID , timeout = timeout || this.timeout;

        return function () {
          var scope = this , args = arguments;
          clearTimeout( timeoutID );
          timeoutID = setTimeout( function () {
              func.apply( scope , Array.prototype.slice.call( args ) );
          } , timeout );
        };
      },
      checkSpeed(e) {
        let speed = e.deltaY;

        if (speed >= this.tolerance) {
          this.$emit('scroll:up', speed);
        }
        else if (speed <= -this.tolerance) {
          this.$emit('scroll:down', speed);
        }
      },
    },
    watch: {
      disable(newVal, oldVal) {
        if (!newVal) {
          this.createListener()
        }
        else if (newVal) {
          this.deleteListener();
        }

        return newVal;
      }
    }
  }
</script>
