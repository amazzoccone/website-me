<template>
  <div class="row pointer" @click="clickHandler">
    <div v-if="positionIsRight" class="full-height column column-border">
      <div v-for="n in params.pages" :key="n" :class="borderClass(n, 'left')" :style="borderStyle"></div>
    </div>
    <div class="column">
      <div class="row full-height">
        <div :class="titleClass">
          <div v-if="params.closeBtn" class="close-btn" @click="close">x</div>
          <div v-if="!params.closeBtn" :class="['title', 'rotate-'+ params.position]">{{ params.text }}</div>
        </div>
      </div>
    </div>
    <div v-if="positionIsLeft" class="full-height column column-border">
      <div v-for="n in params.pages" :key="n" :class="borderClass(n, 'right')" :style="borderStyle"></div>
    </div>
  </div>
</template>

<script>
  import ConfigMixin from './ConfigMixin.vue';

  export default {
    mixins: [ConfigMixin],

    props: {
      params: {
        type: Object,
        required: true,

        validator: function (object) {
          if (!_.has(object, 'position') || ['left', 'right'].indexOf(object.position) == -1) {
            return false;
          }

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
      },
      borderStyle() {
        return {
          height: 100/this.params.pages + 'vh'
        }
      },
      titleClass() {
        return {
          'content': true,
          [this.params.position]: true,
          [this.color]: true
        }
      }
    },
    methods: {
      clickHandler(e) {
          this.$bus.$emit('sidebar:clicked', this.params);
      },
      borderClass(n, position) {
        return {
          ['row border border-'+position]: true,
          [this.color]: true,
          active: n === this.params.page
        }
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
  .pointer {
    cursor: pointer;
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

  /* Color White */
  .content.white {
    color: #FFF;
  }
  /* Color Black */
  .content.black {
    color: #000;
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

  /* Color White */
  .border.white {
    border-color: rgba(255, 255, 255, 0.4);
  }
  .border.white.active {
    border-color: rgba(255, 255, 255, 0.8);
  }
  /* Color Black */
  .border.black {
    border-color: rgba(0, 0, 0, 0.4);
  }
  .border.black.active {
    border-color: rgba(0, 0, 0, 0.8);
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
