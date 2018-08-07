<template>
  <div class="container container_backup">
    <div class="item item_backup" v-for="item in list" :key="item.id">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Case',
  data() {
    return {
      list: [
        {
          id: 1,
          name: '脑瘤术后改变1',
          behavier: '这里是放射学表现11111111111',
          diagnosis: '这里是放射学诊断11111111111'
        },
        {
          id: 2,
          name: '脑瘤术后改变2',
          behavier: '这里是放射学表现2222222',
          diagnosis: '这里是放射学诊断2222222'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  display: block;
  height: 100vh;
  width: 188px;
  &_backup {
    min-width: 188px;
  }

  .item {
    width: 100%;
    height: 34px;
    box-shadow: inset 0 -1px 0 0 #8d99b2;
    background: #fff;
    color: #2d2d2d;
    &_backup {
      min-height: 34px;
    }
  }
}
</style>
