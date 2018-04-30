<template>
  <section class="container">
    <div class="row">
      <div class="title column column-50 column-offset-25">
        <div class="row">
          <coming-soon/>
        </div>
        <div class="row">
          <div class="links">
              <p class="follow-text">follow me:</p>
              <p class="follow-link">
                <a
                  href="https://www.instagram.com/andres.mazzo"
                  target="_blank"
                  class="follow-anchor">instagram.com/andres.mazzo</a>
              </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ComingSoon from '~/components/ComingSoon.vue'

export default {
  components: {
    ComingSoon
  }
}
</script>

<style scoped>
  .title {
    margin-top: 15%;
  }

  .links {
    padding-top: 100px;
  }

  .links > p {
    margin-top: -10px;
    margin-bottom: 0px;
    font-size: 0.9em;
  }

  .follow-text {
    text-align: left;
    font-weight: bold;
    color: #BBB;
  }
  .follow-link {
    text-align: left;
  }
  .follow-anchor {
    color: #AAA;
  }
  .follow-anchor:hover {
    color: #777;
  }

</style>
