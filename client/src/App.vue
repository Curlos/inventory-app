<template>
 <div class="container">
    <Header />
    <router-view></router-view>
 </div>
</template>

<script>
import Header from './components/Header'


export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}
</style>
