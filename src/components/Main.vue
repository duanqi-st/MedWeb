<template>
  <div class="main main_backup">
    <div class="canvas-wrapper">
      <div :class="canvasClass">1</div>
    </div>
    <div class="canvas-wrapper">
      <div :class="canvasClass">2</div>
    </div>
    <div class="canvas-wrapper">
      <div :class="canvasClass">3</div>
    </div>
    <div class="canvas-wrapper">
      <div :class="canvasClass">4</div>
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

  background: #000;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
}

.main_backup {
  min-width: 50vmin;
}

.canvas-wrapper {
  display: flex;
  box-sizing: border-box;
  background: #000;
  min-width: 50%;
  max-width: 100%;
  border: 1px solid #fff;
}

.canvas {
  margin: auto;

  background: #ff7875;
  &_layout1 {
    width: 100vmin;
    height: 100vmin;
  }
  &_layout4 {
    width: 49vmin;
    height: 49vmin;
  }
}
</style>
