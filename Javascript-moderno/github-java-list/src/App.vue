<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-link :to="{ name: 'Home' }">Home</router-link> -->
    <!-- <router-link to="/pull-requests">Pull Requests</router-link> -->
    <router-view/>
  </div>
</template>

<script>



export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  height: 50px;
}
</style>
