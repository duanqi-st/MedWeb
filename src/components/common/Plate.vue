<template>
  <div class="plate">
    <div class="title title_backup">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Plate',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.plate {
  width: 100%;
  .title {
    &_backup {
      height: 24px;
      line-height: 24px;
      padding: 0 12px;
      box-sizing: border-box;
      font-size: 12px;
      color: #648ad5;
      background-image: linear-gradient(to right, #121c36, transparent);
    }
  }
}
</style>

