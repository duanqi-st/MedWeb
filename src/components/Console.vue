<template>
  <div class="console console_backup">
    <div class="header header_backup">
      <div class="toggle toggle_backup" @click="toggleMiniPI">
        <div class="toggle--inner"></div>
      </div>
      <span>Tools</span>
      <select>
        <option value="2"></option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Console',
  methods: {
    toggleMiniPI() {
      this.$emit('onToggle');
    }
  }
};
</script>

<style lang="less" scoped>
.console {
  width: 15.432vw;
  height: 100vh;

  background: #253561;
  &_backup {
    min-width: 252px;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 0 9px;

  color: #fff;
  background: #1a284d;
  &_backup {
    height: 45px;

    font-size: 14px;
  }
}

.toggle {
  &_backup {
    box-sizing: border-box;
    width: 20px;
    height: 14px;

    border: 1px solid #fff;
  }
  &--inner {
    height: 100%;
    margin-left: 5px;

    border-left: 1px solid #fff;
  }
}
</style>
