<template>
  <nuxt-link to="/">
    <div :style="cssProps">
      <p class="name">{{ $t('author.name') }}</p>
      <p class="skill">{{ $t('author.skill') }}</p>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    computed: {
      cssProps() {
        return {
          color: 'var(--color)'
        }
      }
    }
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
