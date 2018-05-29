<template>
  <div>
    <button class="button button-outline" @click="activeContact">
      {{ $t('social.links.contact') }}
    </button>
    <button class="button button-outline" @click="activeContact">
      {{ $t('social.links.follow') }}
    </button>

    <template v-if="contactIsActive">
      <button class="button button-outline">{{ $t('social.mail') }}</button>

      <button class="button" @click="close">x</button>
    </template>
    <template v-if="followIsActive">
      <button class="button button-outline">{{ $t('social.facebook') }}</button>
      <button class="button button-outline">{{ $t('social.instagram') }}</button>

      <button class="button" @click="close">x</button>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: null
    }
  },
  computed: {
    contactIsActive() {
      return this.active == 'contact';
    },
    followtIsActive() {
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
