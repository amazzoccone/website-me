<template>
    <div>
      <div class="work-image">
        <img :src="this.image"/>
        <nuxt-link :to="this.to">
          <div class="overlay">
            <div class="more-icon">+</div>
          </div>
        </nuxt-link>
      </div>
      <div class="work-info">
        <div class="work-title">
          {{ title }}
        </div>
        <div class="work-subtitle">
          <p class="technique">{{ technique }}</p>
          <p class="dimension">{{ dimension }}</p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      technique: {
        type: String,
        required: true
      },
      dimension: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      to: {
        type: String,
        required: true
      }
    },
  }
</script>

<style scoped>
  @import '~/assets/css/variables.css';

  .work-image {
    position: relative;
    width: 100%;
    height: 80%;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--work-card-overlay-background);
    overflow: hidden;
    text-align: center;
    width: 0;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: .5s ease;
  }
  .overlay > div {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }
  .more-icon {
    font-weight: lighter;
    font-size: 2.8rem;
    color: #333;
  }

  .work-image:hover .overlay {
    width: 100%;
  }

  .work-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .work-info {
    font-size: 0.8rem;
    margin-top: 12px;
  }
  .work-info > div {
    display: inline-block;
  }

  .work-title {
    float: left;
    font-weight: bold;
  }
  .work-subtitle {
    float: right;
    margin-right: 10px;
  }
  .work-subtitle > p {
    margin: 0;
    line-height: 1.1;
  }
  .technique {

  }
  .dimension {
    font-size: 0.9rem;
  }
</style>
