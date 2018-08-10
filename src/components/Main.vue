<template>
  <div class="main main_backup">
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
@media screen and (orientation: portrait) {
  .main {
    order: 2;
  }
}
.main {
  display: flex;
  flex: 108;
  flex-wrap: wrap;

  background: red;
}

.main_backup {
  min-width: 100vmin;
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
