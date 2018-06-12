<template>
  <div>
    <p class="name">{{ $t('author.name') }}</p>
    <p class="skill">{{ $t('author.skill') }}</p>
  </div>
</template>

<script>
  export default {
    //
  }
</script>

<style scoped>
  @import '~/assets/css/variables.css';
  
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
