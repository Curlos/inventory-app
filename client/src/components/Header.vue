<template>
  <div class="headerContainer">
    <router-link to="/" class="homeLink">
      <img src="https://store.storeimages.cdn-apple.com/4982/store.apple.com/shop/rs-globalelements/dist/us/ac-globalnav-dist/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg" alt="Apple Logo" />
    </router-link>
    <router-link to="/mac">Mac</router-link>
    <router-link to="/ipad">iPad</router-link>
    <router-link to="/iphone">iPhone</router-link>
    <router-link to="/watch">Watch</router-link>
    <router-link to="/tv">TV</router-link>
    <router-link to="/music">Music</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',

}
</script>

<style scoped>
  .headerContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(#202020, #393939);
    color: #FFFFFF;
  }

  a {
    color: #FFFFFF;
    text-decoration: none;
  }

  .homeLink {
    padding: 0;
    margin: 0;
    max-height: 44px;
  }

</style>