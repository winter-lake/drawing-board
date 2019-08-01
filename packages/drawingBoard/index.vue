<template>
  <div class="inner draw">
    <div class="control">
      
    </div>
    <div class="wrap">
      <canvas></canvas>
    </div>
  </div>
</template>
<script>
export default {
  name: "drawingBoard",
  data() {
    return {
        default:{
            
        }
    }
  },
  props: {
    config: {
      type: Object
    }
  },
  created() {},
  mounted() {
    console.log(this.config)
  }
};
</script>
<style lang="less">
.inner {
  width: 100%;
  height: 100%;
  display: flex;
  .control {
    min-width: 100px;
    height: 100%;
    background: red;
  }
  .wrap {
    flex: 1;
    background: blue;
  }
}
</style>