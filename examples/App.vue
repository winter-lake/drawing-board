<template>
  <div id="app">
    <div class="container">
      <drawing-board :config="config"></drawing-board>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      config: {
        
      }
    }
  },
  components: {},
  created() {
     console.log(this.config)
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
}
.container {
  width: 1000px;
  height: 600px;
  margin: 0 auto;
  background: #eee;
}
</style>
