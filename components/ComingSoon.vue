<template>
  <div>
    <h1 class="cs-text pri animated fadeIn">
      Something new
    </h1>
    <h2 class="cs-text sub animated fadeIn">
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

    -webkit-animation-duration: 3s;
  }
  .cs-text.sub {
    color: #CCC;
    font-size: 3rem;
    letter-spacing: 3px;
    margin-top: -10px;

    -webkit-animation-duration: 3s;
    -webkit-animation-delay: 1s;
  }

</style>
