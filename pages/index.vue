<template>
  <div class="container home-content">
    <div class="row">
      <div class="column">
        <coming-soon/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="links animated fadeIn">
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
/* Mobile First Media Queries */
.home-content {
  padding: 15% 2%;
}

.links {
  padding-top: 35vh;

  -webkit-animation-duration: 1s;
  -webkit-animation-delay: 3s;
}

.links > p {
  margin-top: -8px;
  margin-bottom: 0px;
  font-size: 0.8em;
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
/* Base style */


/* Larger than mobile screen */
@media (min-width: 40.0rem) {
  .home-content {
    padding: 12% 5%;
  }
}

/* Larger than tablet screen */
@media (min-width: 80.0rem) {
  .home-content {
    padding: 12% 20%;
  }

  .links {
    padding-top: 20vh;
  }

  .links > p {
    font-size: 0.9em;
  }
}

/* Larger than desktop screen */
@media (min-width: 120.0rem) {

}

</style>
