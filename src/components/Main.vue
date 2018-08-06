<template>
  <div class="main main_ignore">
    <div class="canvas-wrapper">
      <div class="canvas"></div>
    </div>
    <div class="canvas-wrapper">
      <div class="canvas"></div>
    </div>
    <div class="canvas-wrapper">
      <div class="canvas"></div>
    </div>
    <div class="canvas-wrapper">
      <div class="canvas"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
};
</script>

<style scoped>
.main {
  display: flex;
  flex: 1;
  flex-wrap: wrap;

  background: red;
}

.main_ignore {
  min-width: 100vh;
}

.canvas-wrapper {
  display: flex;

  box-sizing: border-box;
  width: 50%;

  border: 1px solid #fff;
  background: #000;
}

.canvas {
  width: 50vmin;
  height: 50vmin;
  margin: auto;

  background: #ff7875;
}
</style>
