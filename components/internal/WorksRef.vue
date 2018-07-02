<template>
  <div class="box">
    <p class="works-ref">
      <b>{{ this.pageText }}</b>
    </p>
    <p class="works-ref">
      {{ $t('home.works') }}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      page: {
        type: Number,
        required: true
      }
    },
    computed: {
      pageText() {
        return `/0${this.page}`;
      }
    }
  }
</script>

<style scoped>
  .box {
    text-align: left;
  }
  .works-ref {
    font-size: 1.2rem;
    line-height: 1.2;
    margin-bottom: 0;
  }
</style>
