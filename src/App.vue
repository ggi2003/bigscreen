<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png"> -->
    <BigscreenIndex/>
  </div>
</template>

<script>
import BigscreenIndex from "./components/bigscreen/index";

export default {
  name: "App",
  components: {
    BigscreenIndex
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  background-color: #2c3e50;
  background-image: url(./components/bigscreen/src/images/bg.bigscreen.png);
}
</style>
