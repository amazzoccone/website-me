<template>
  <div class="fullpage row">
    <background-page color="#EEE" :images="images"></background-page>
    <sidebar rotate="-90" :text="$t('links.about')"></sidebar>
    <content-page>
      <!--TODO: Add title and work number reference-->
    </content-page>
    <sidebar rotate="90" :text="$t('links.works')"></sidebar>
  </div>
</template>

<script>
import BackgroundPage from '~/components/Background.vue'
import Content from '~/components/Content.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  data() {
    return {
      images: [
        '/IMG_0529.JPG',
        '/IIKY4090.JPG',
        //TODO: Add images paths
      ]
    }
  },
  components: {
    BackgroundPage,
    'content-page': Content,
    Sidebar
  }
}
</script>

<style>
  .fullpage {
    height: 100vh;
  }
</style>
