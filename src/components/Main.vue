<template>
  <div class="main main_backup">
    <div class="canvas-wrapper">
      <div :class="canvasClass"></div>
    </div>
    <div class="canvas-wrapper">
      <div :class="canvasClass"></div>
    </div>
    <div class="canvas-wrapper">
      <div :class="canvasClass"></div>
    </div>
    <div class="canvas-wrapper">
      <div :class="canvasClass"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      layout: 'layout4'
    };
  },
  computed: {
    canvasClass() {
      return {
        canvas: true,
        canvas_layout1: this.layout === 'layout1',
        canvas_layout4: this.layout === 'layout4'
      };
    }
  },
  created() {
    this.$bus.on('switchLayout', this.switchLayout);
  },
  beforeDestroy() {
    this.$bus.off('switchLayout', this.switchLayout);
  },
  methods: {
    switchLayout(name) {
      this.layout = name;
    }
  }
};
</script>

<style lang="less" scoped>
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
  overflow-x: hidden;
  overflow-y: scroll;
}

.main_backup {
  // min-width: 50vmin;
}

.canvas-wrapper {
  display: flex;
  box-sizing: border-box;
  border: 1px solid #fff;
  background: #000;
  min-width: 50%;
  max-width: 100%;
}

.canvas {
  margin: auto;

  background: #ff7875;
  &_layout1 {
    width: 100vmin;
    height: 100vmin;
  }
  &_layout4 {
    width: 49.5vmin;
    height: 50vmin;
  }
}
</style>
