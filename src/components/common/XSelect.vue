<template>
  <div>
    <div class="x-select x-select_backup" @click="expand = !expand">
      {{selected}}
      <div class="x-select--icon_backup" :class="iconClass"></div>
    </div>
    <div v-if="expand">
      <div v-for="option in options" :key="option.id" class="x-select--option">
        {{option.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      expand: false
    };
  },
  computed: {
    iconClass() {
      return {
        'x-select--icon': this.expand,
        'x-select--icon_unexpand': !this.expand
      };
    },
    selected() {
      return this.options.find(({ selected }) => selected);
    }
  }
};
</script>

<style lang="less" scoped>
.x-select {
  color: #fff;
  background: rgba(54, 96, 221, 0.8);
  border-radius: 100px;
  display: flex;
  padding: 0 1em;
  align-items: baseline;
  justify-content: space-between;
  box-sizing: border-box;
  &_backup {
    width: 72px;
    height: 20px;
    font-size: 12px;
  }
  &--icon {
    &_backup {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 2.5px 5px 2.5px;
      border-color: transparent transparent #fff transparent;
      transition: all 0.3s ease-in-out;
    }
    &_unexpand {
      transform: rotate(180deg);
      transform-origin: center 75%;
    }
  }
}
</style>
