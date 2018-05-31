<template>
  <div class="row">
    <div v-if="positionIsRight" class="full-height column">
      <div v-for="n in pages" :key="n" class="border-left" :style="borderStyle(n)"></div>
    </div>
    <div class="full-height column">
        <div :class="['content', position]">
          <div v-if="closeBtn" class="close-btn" @click="close">x</div>
          <div v-if="!closeBtn" :class="['title', 'rotate-'+ position]">{{ text }}</div>
        </div>
    </div>
    <div v-if="positionIsLeft" class="full-height column">
      <div v-for="n in pages" :key="n" class="border-right" :style="borderStyle(n)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      required: true,

      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1
      }
    },
    text: {
      type: String,
    },
    closeBtn: {
      type: Boolean,
      default: false
    },
    pages: {
      type: Number,
      default: 1
    },
    page: {
      type: Number,
      default: 1
    },
    //TODO: Validate color as hexa
    color: {
      type: String,
      default: '#000'
    },
  },
  computed: {
    borderPosition() {
      return this.positionIsLeft ? 'right' : 'left';
    },
    positionIsLeft() {
      return this.position === 'left';
    },
    positionIsRight() {
      return this.position === 'right';
    }
  },
  methods: {
    borderStyle(n) {
      let height = 100/this.pages;
      let opacity = n === this.page ? 0.8 : 0.4;

      return {
        'border-color': this.hexToRgbA(this.color, opacity),
        height: height + 'vh'
      }
    },
    hexToRgbA(hex, opacity = 1) {
      var c;
      if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
          c= hex.substring(1).split('');
          if(c.length== 3){
              c= [c[0], c[0], c[1], c[1], c[2], c[2]];
          }
          c= '0x'+c.join('');
          return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+opacity+')';
      }
      throw new Error('Bad Hex');
    },
    close() {
      this.$emit('sidebar-close-clicked');
    }
  },
}
</script>

<style scoped>
  .full-height {
    height: 100vh;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
  }
  .content.left {
    margin-left: 35px;
  }
  .content.right {
    margin-right: 35px;
  }

  .content > .title {
    white-space:nowrap;
    display:block;
    position: absolute;
    top: 50%;
    font-size: 1.2rem;
  }
  .content > .close-btn {
    align-self: flex-start;
  }

  .border-left {
    border-left: 2px solid #000;
  }
  .border-right {
    border-right: 2px solid #000;
  }

  .rotate-left {
    -webkit-transform:rotate(-90deg);
    -moz-transform:rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform:rotate(-90deg);
    transform: rotate(-90deg);
  }
  .rotate-right {
    -webkit-transform:rotate(90deg);
    -moz-transform:rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform:rotate(90deg);
    transform: rotate(90deg);
  }
</style>
