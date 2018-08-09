<template>
  <div class="icon icon_backup" :class="{'icon_active':isActive}" @click="()=>handleSelect(name)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    current: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    isActive() {
      return this.name === this.current;
    }
  },
  methods: {
    handleSelect(name) {
      if (!this.isActive) {
        this.$emit('update:current', name);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.icon {
  position: relative;
  width: 35px;
  height: 35px;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  margin-right: 5px;
  &_backup {
    min-width: 35px;
    min-height: 35px;
  }
  &_active {
    background: rgba(7, 17, 27, 0.5);
    border-radius: 10%;
  }
}

.icon > * {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
