<template>
  <div>
    <div class="headerContainer">
      <router-link to="/" class="homeLink">
        <img src="https://store.storeimages.cdn-apple.com/4982/store.apple.com/shop/rs-globalelements/dist/us/ac-globalnav-dist/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg" alt="Apple Logo" />
      </router-link>
      <router-link to="/category/mac" exact>Mac</router-link>
      <router-link to="/category/ipad" exact>iPad</router-link>
      <router-link to="/category/iphone" exact>iPhone</router-link>
      <router-link to="/category/watch" exact>Watch</router-link>
      <router-link to="/category/tv" exact>TV</router-link>
      <router-link to="/category/music" exact>Music</router-link>
    </div>
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