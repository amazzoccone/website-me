<template>
  <div class="fullpage row">
    <!-- <background-page></background-page> -->
    <sidebar rotate="-90" :text="$t('links.about')"></sidebar>
    <!-- <content>
      <header-ct></header-ct>
    </content> -->
    <sidebar rotate="90" :text="$t('links.works')"></sidebar>
  </div>
</template>

<script>
// import BackgroundPage from '~/components/BackgroundPage.vue'
// import Content from '~/components/Content.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  data() {
    return {
      images: [
        //TODO: Add images paths
      ]
    }
  },
  mounted() {

  },

  components: {
    // BackgroundPage,
    // Content,
    Sidebar
  }
}
</script>

<style>
  .fullpage {
    height: 100vh;
  }
</style>
