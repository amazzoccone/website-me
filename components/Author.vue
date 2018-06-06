<template>
  <div :style="{color: color}">
    <p class="name">{{ $t('author.name') }}</p>
    <p class="skill">{{ $t('author.skill') }}</p>
  </div>
</template>

<script>
  import ConfigMixin from './ConfigMixin.vue';

  export default {
    mixins: [ConfigMixin],
  }
</script>

<style scoped>
  p {
      margin: 0px;
      font-size: 1rem;
      line-height: 1.3;
  }

  .name {
    font-weight: bold;
  }
  .skill {

  }
</style>
