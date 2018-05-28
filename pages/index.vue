<template>
  <div>
    <coming-soon v-if="showComingSoon"></coming-soon>
    <home v-else></home>
  </div>
</template>

<script>
import ComingSoon from '~/components/ComingSoon/Content.vue'
import Home from '~/components/Home.vue'

export default {
  computed: {
    showComingSoon() {
        return process.env.coming_soon;
    }
  },

  components: {
    ComingSoon,
    Home
  }
}
</script>
