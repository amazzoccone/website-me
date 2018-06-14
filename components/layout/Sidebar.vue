<template>
  <div class="row pointer" @click="clickHandler">
    <border v-if="positionIsRight" :active="this.params.page" :count="params.pages"/>


    <div class="column">
      <div class="row full-height">
        <div class="content" :style="cssProps">
          <div v-if="!params.closeBtn" class="title rotate-90">{{ params.text }}</div>
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
      }
    },
    methods: {
      clickHandler(e) {
          this.$bus.$emit('sidebar:clicked', this.params);
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
    top: 50%;
    font-size: 1.1rem;
    letter-spacing: 1px;
  }

  .rotate-90 {
    -webkit-transform:rotate(-90deg);
    -moz-transform:rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform:rotate(-90deg);
    transform: rotate(-90deg);
  }
</style>
