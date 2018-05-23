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
/* Mobile First Media Queries */
.cs-text {
  text-align: left;
  word-spacing: 5px;
  letter-spacing: 4px;
  margin-bottom: 0px;
}
.cs-text.pri {
  color: #AAA;
  font-size: 3rem;

  -webkit-animation-duration: 3s;
}
.cs-text.sub {
  color: #CCC;
  font-size: 2.5rem;
  letter-spacing: 1px;
  margin-top: 10px;

  -webkit-animation-duration: 3s;
  -webkit-animation-delay: 1s;
}
/* Base style */


/* Larger than mobile screen */
@media (min-width: 40.0rem) {
  .cs-text {
    word-spacing: 10px;
    letter-spacing: 9px;
  }

  .cs-text.pri {
    font-size: 4rem;
  }
  .cs-text.sub {
    font-size: 3rem;
    letter-spacing: 2px;
    margin-top: 0px;
  }
}

/* Larger than tablet screen */
@media (min-width: 80.0rem) {
  .cs-text.pri {
    font-size: 4.3rem;
  }
}

/* Larger than desktop screen */
@media (min-width: 120.0rem) {

}
</style>
