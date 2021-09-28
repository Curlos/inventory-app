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

.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
