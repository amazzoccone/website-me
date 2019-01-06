<template>
  <div class="row">
    <border v-if="positionIsRight" :active="this.params.page" :count="params.pages"/>

    <div class="column">
      <div class="row full-height">
        <div class="content" :style="cssProps">
            <div v-if="params.top"
              class="top title rotate-90 pointer"
              :class="[params.top.size || 'md']"
              @click="clickTopHandler"
              v-html="params.top.text">
            </div>

            <div
              class="center title rotate-90 pointer"
              :class="[params.size || 'md']"
              @click="clickCenterHandler"
              v-html="params.text">
            </div>
        </div>
      </div>
    </div>

    <border v-if="positionIsLeft" :active="this.params.page" :count="params.pages"/>
  </div>
</template>

<script>
  import Border from './specific/Border.vue';

  export default {
    props: {
      params: {
        type: Object,
        required: true,

        validator: function (object) {
          if (!_.has(object, 'position') || ['left', 'right'].indexOf(object.position) == -1) {
            return false;
          }

          if (_.has(object, 'size') && ['xs', 'md', 'lg'].indexOf(object.size) == -1) {
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
      cssProps() {
        return {
          color: 'var(--color)'
        };
      },
      classText() {
        return [
          this.params.size || 'md',
        ];
      }
    },
    methods: {
      clickTopHandler(e) {
          this.$bus.$emit('sidebar:clicked', _.merge(this.params, { clicked: 'top' }));
      },
      clickCenterHandler(e) {
          this.$bus.$emit('sidebar:clicked', _.merge(this.params, { clicked: 'center' }));
      },
      close() {
        this.$emit('sidebar-close-clicked');
      }
    },
    components: {
      Border
    }
  }
</script>

<style>
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    margin-left: 50%;
  }

  .content > .title {
    white-space:nowrap;
    display:block;
    position: absolute;
    letter-spacing: 1px;
  }

  .title.top {
    top: 5%;
  }
  .title.center {
    top: 50%;
  }

  .title.xs {
    font-size: 0.5rem;
  }
  .title.md {
    font-size: 1rem;
  }
  .title.lg {
    font-size: 1.8rem;
    margin-left: -3px;
  }

  .rotate-90 {
    -webkit-transform:rotate(-90deg);
    -moz-transform:rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform:rotate(-90deg);
    transform: rotate(-90deg);
  }
</style>
