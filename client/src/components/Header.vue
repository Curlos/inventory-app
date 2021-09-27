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

    <div class="searchAndAdd">
      <div>
        <input type="text"/>
        <i class="fas fa-search"></i>
      </div>
      <router-link to="/add-product">
        <button>Add a product</button>
      </router-link>
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

  .searchAndAdd {
    display: flex;
    justify-content: space-around;
    margin: 10px;
  }

  .searchAndAdd input[type="text"] {
    padding: 10px;
    border: 2px solid lightgray;
    border-right: none;
    border-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    outline: none;
    width: 300px;
  }

  .searchAndAdd button {
    color: white;
    background-color: #0077ED;
    border: none;
    border-radius: 20px;
    padding: 10px;
  }
  .searchAndAdd button:hover {
    background-color: #005fbe;
    cursor: pointer;
  }

  i {
    color: black;
    padding: 8px 10px 11px 10px;
    border: 2px solid lightgray;
    border-left: none;
    border-radius: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

</style>