<template>
    <div class="row">
      <template v-if="!active">
        <div class="column">
          <div class="row">
            <button class="button" @click="activeContact">
              {{ $t('social.links.contact') }}
            </button>
          </div>
        </div>
        <div class="column">
          <div class="row">
            <button class="button" @click="activeFollow">
              {{ $t('social.links.follow') }}
            </button>
          </div>
        </div>
      </template>

      <template v-if="contactIsActive || followIsActive">
        <div class="column">
          <div class="row">
            <template v-if="contactIsActive">
              <div class="column">
                <div class="row">
                  <a :href="mailTo" class="button button-outline">{{ $t('social.mail') }}</a>
                </div>
              </div>
            </template>
            <template v-if="followIsActive">
              <div class="column">
                <div class="row">
                  <a :href="facebookUri" target="_blank"
                    class="button">{{ $t('social.facebook') }}
                  </a>
                </div>
              </div>
              <div class="column">
                <div class="row">
                  <a :href="instagramUri" target="_blank"
                    class="button">{{ $t('social.instagram') }}
                  </a>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="column column-close">
          <div class="row">
            <button class="button close" @click="close">&times;</button>
          </div>
        </div>
      </template>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      facebookUri: 'https://facebook.com/andresmazzo',
      instagramUri: 'https://instagram.com/andres.mazzo',
      mailTo: 'mailto:mazzoandres@gmail.com'
    }
  },
  computed: {
    contactIsActive() {
      return this.active == 'contact';
    },
    followIsActive() {
      return this.active == 'follow';
    },
  },
  methods: {
    close() {
      return this.active = null;
    },
    activeContact() {
      this.active = 'contact';
    },
    activeFollow() {
      this.active = 'follow';
    },
  }
}
</script>

<style scoped>
  .wrapper {
      -webkit-box-flex: 0 !important;
      -ms-flex: 0 0 43% !important;
      flex: 0 0 43% !important;
      max-width: 43% !important;
  }

  .column-close {
    width: 55px;
  }

  .button {
    width: 100%;
    background-color: #FFF;
    border: none;
    border-radius: 0;
    color:#111;
    text-transform: none;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.02rem;
    margin-bottom: 0;
    height: 3.1rem;
    line-height: 3.1rem;
    padding: 0 1rem;
  }
  .button:hover {
    background-color: #EEE;
    border: none;
    color:#111;
  }

  .button.button-outline:focus {
    background-color: #FFF;
    border: none;
    color:#111;
  }

  .button.close {
    font-size: 2.2rem;
    color: #777;
    padding: 0px;
    padding-bottom: 5px;
    line-height: 1;
  }
</style>
