<template>
  <div class="logo">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    	 :width="size" :height="size" viewBox="0 0 17 17" enable-background="new 0 0 17 17" xml:space="preserve">
      <g>
      	<path :fill="color" d="M10.795,14.134v1.173l-4.591-1.803v-0.852l4.591-1.793v1.158l0,0l-2.933,1.058L10.795,14.134z"/>
      	<path :fill="color" d="M10.795,5.485V6.5L7.656,7.669h3.139v1.099H6.204V7.175L10.795,5.485z M10.795,4.983L6.204,3.285V1.693
      		h4.591v1.088H7.656l3.139,1.171V4.983z"/>
      </g>
    </svg>
  </div>
</template>

<script>
  import ConfigMixin from './ConfigMixin.vue';

  export default {
    mixins: [ConfigMixin],

    data () {
      return {
        size: '45px'
      }
    }
  }
</script>
