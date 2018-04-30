<template>
  <div>
    <h1 class="cs-text pri">
      Something new
    </h1>
    <h2 class="cs-text sub">
      is coming...
    </h2>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .cs-text {
    text-align: left;
    word-spacing: 10px;
    letter-spacing: 9px;
    margin-bottom: 0px;
  }
  .cs-text.pri {
    color: #AAA;
    font-size: 4.3rem;
  }
  .cs-text.sub {
    color: #CCC;
    font-size: 3rem;

    letter-spacing: 3px;
    margin-top: -10px;
  }

</style>
