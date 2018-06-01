<template>
  <div class="row">
    <div v-if="positionIsRight" class="full-height column column-border">
      <div v-for="n in params.pages" :key="n" class="row border border-left" :style="borderStyle(n)"></div>
    </div>
    <div class="column">
      <div class="row full-height">
        <div :class="['content', params.position]">
          <div v-if="params.closeBtn" class="close-btn" @click="close">x</div>
          <div v-if="!params.closeBtn" :class="['title', 'rotate-'+ params.position]">{{ params.text }}</div>
        </div>
      </div>
    </div>
    <div v-if="positionIsLeft" class="full-height column column-border">
      <div v-for="n in params.pages" :key="n" class="row border border-right" :style="borderStyle(n)"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      params: {
        type: Object,
        required: true,

        validator: function (object) {
          if (!_.has(object, 'position') || ['left', 'right'].indexOf(object.position) == -1) {
            return false;
          }

          if (!_.has(object, 'text') || !_.isString(object.text)) {
            return false;
          }

          if (!_.has(object, 'pages') || !_.isNumber(object.pages)) {
            return false;
          }

          if (!_.has(object, 'page') || !_.isNumber(object.page)) {
            return false;
          }

          if (!_.has(object, 'color') || !_.isString(object.text)) {
            return false;
          }
          //TODO: Validate color as hexa

          return true;
        }
      },
    },
    computed: {
      borderPosition() {
        return this.positionIsLeft ? 'right' : 'left';
      },
      positionIsLeft() {
        return this.params.position === 'left';
      },
      positionIsRight() {
        return this.params.position === 'right';
      }
    },
    methods: {
      borderStyle(n) {
        let height = 100/this.params.pages;
        let opacity = n === this.params.page ? 0.8 : 0.4;

        return {
          'border-color': this.hexToRgbA(this.params.color, opacity),
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
    }
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
    margin-left: 70%;
  }
  .content.right {
    margin-left: 20%;
  }

  .content > .title {
    white-space:nowrap;
    display:block;
    position: absolute;
    top: 50%;
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
  .content > .close-btn {
    align-self: flex-start;
  }

  .column-border {
      padding: 0;
  }

  .border {
    margin: 0;
    width: 100%;
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
